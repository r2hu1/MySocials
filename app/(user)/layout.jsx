import Footer from "@/components/Footer";
import Header from "./_components/Header";

export default function Layout({ children }) {
    return(
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}