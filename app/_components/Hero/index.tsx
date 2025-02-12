import Image from "next/image";
import styles from "./index.module.css";

type Props = {
    title: string;
    sub: string;
}

export default function Hero ({title, sub}: Props) {
    return (
        <section className={styles.container}>
            <h1 className={styles.titele}>{title}</h1>
            <p className={styles.sub}>{sub}</p>
            <Image
            className={styles.bgimg}
            src="/img-mv.jpg"
            alt=""
            width={4000}
            height={1200}
            />
        </section>
    );
}