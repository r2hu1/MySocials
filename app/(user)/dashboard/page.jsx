import Footer from "@/components/Footer";
import Header from "../_components/Header";
import TopNav from "../_components/TopNav";

export default function Page(){
    return(
        <div>
            <Header/>
            <TopNav active={["Dashboard"]} link=""/>
            <Footer/>
        </div>
    )
}