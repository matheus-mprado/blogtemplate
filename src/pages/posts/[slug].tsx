import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../service/prismic";

import styles from '../../styles/pages/posts/Posts.module.scss';

interface PostProps{
    post:{
        slug:string;
        title:string;
        content:string;
        updatedAt:string;
    }
}

export default function Post({post}:PostProps){
    return(
        <>
            <Head>
                <title>{post.title} | Secretária de Saúde São Sebastião</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.content}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div
                        // className={styles.postContent}
                        dangerouslySetInnerHTML={{__html:post.content}}
                    />
                </article>
            </main>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async ({req,params}) =>{
    const {slug} = params;

    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('publication',String(slug),{})

    const post = {
        slug,
        title:RichText.asText(response.data.title),
        content:RichText.asHtml(response.data.content),
        updatedAt:new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day:'2-digit',
            month:'long',
            year:'numeric'
        })
    }

    return{
        props:{
            post
        }
    }
}