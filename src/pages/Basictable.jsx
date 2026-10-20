import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';

const bannerInfo = {
    title: 'Basic Tables',
    desc: 'Highly customizable, responsive tabular data component templates.'
}

export default function BasicTable() {
    return (
        <>
            <Header />
            <HeaderBanner bannerTitle={bannerInfo.title} bannerDesc={bannerInfo.desc} />
            <Footer />
        </>
    )
}