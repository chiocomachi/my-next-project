import Image from "next/image";
import styles from "./page.module.css";

const data = {
    contents:[ {
        id: "1",
        image: {
            url: "/img-member1.jpg",
            width: 240,
            height: 240,
        },
        name: "デイビッド・チャン",
        position: "CEO",
        profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae perspiciatis sunt laborum suscipit modi, fugit, non deserunt ipsum quo fugiat est molestias consectetur reiciendis sed quam! Distinctio, repellat est."
    }, {
        id: "2",
        image: {
            url: "/img-member2.jpg",
            width: 240,
            height: 240,
        },
        name: "エミリー・サンダース",
        position: "COO",
        profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora et id, illum corporis, cumque assumenda hic voluptates minus vitae quibusdam tenetur porro optio. Similique quia cum fugiat labore consequatur?"
    }, {
        id: "3",
        image: {
            url: "/img-member3.jpg",
            width: 240,
            height: 240,
        },
        name: "ジョン・ウィルソン",
        position: "CTO",
        profile: "Lorem ipsum dolor lore amet consectetur, adipisicing elit. A eius facere quia dolore, assumenda hic optio harum quibusdam natus tempore impedit consequatur nemo odit neque reprehenderit doloribus facilis. Adipisci, animi."
    }
]
};

export default function Page() {
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((member) => (
                        <li key={member.id} className={styles.list}>
                            <Image
                            src={member.image.url}
                            alt=""
                            width={member.image.width}
                            height={member.image.height}
                             />
                             <dl>
                                 <dt className={styles.name}>{member.name}</dt>
                                 <dd className={styles.position}>{member.position}</dd>
                                 <dd className={styles.profile}>{member.profile}</dd>
                             </dl>
                        </li>
                    ))}
                </ul>
            )} 
        </div>
    );
}