import Image from "next/image";
import Link from "next/link";
const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];
const Footer=()=>{
    return (
        <footer className="flex justify-center gap-y-10 gap-x-60 flex-wrap my-10">
            <div>
                <Image className="mx-auto my-2" src='/logo.svg' width={120} height={20}/>
                <p>Carhub 2023,All Rights Reserved ©</p>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-x-40">
                {footerLinks.map((section,index)=>
                    <div key={section.title}>
                        <h4 className="font-bold text-xl my-2">{section.title}</h4>
                        <ul>
                            {section.links.map((link,indx)=>
                                <li  key={`${link.title}${indx}`} className="my-2"><Link href={link.url}>{link.title}</Link></li>)}
                        </ul>
                    </div>)}
                {/* <ul>
                    <li>About</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                </ul>
                <ul>
                    <li>Socials</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                </ul> */}
            </div>
        </footer>
    );
}
export default Footer;