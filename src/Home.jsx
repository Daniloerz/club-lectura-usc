import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Header from './Header.jsx'
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';

const sections = [
    { title: 'Home', url: '#' },
    { title: 'Libros', url: '#' },
    { title: 'Clubs', url: '#' }
];

const mainFeaturedPost = {
    title: '¡Bienvenidos al Club de Lectura de la Universidad Santiago de Cali!',
    description:
        "En nuestro club de lectura, exploramos mundos inexplorados, vivimos múltiples vidas y compartimos el placer de la lectura. Si eres un amante de los libros y las historias fascinantes, has llegado al lugar adecuado. Únete a nuestra comunidad de apasionados lectores mientras viajamos a través de las páginas de libros emocionantes y descubrimos nuevas perspectivas literarias. ¡Prepárate para sumergirte en un mundo de palabras y conversaciones enriquecedoras en nuestro Club de Lectura - USC!",
    image: 'https://source.unsplash.com/random?books',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Explorar Libros',
        description:
            'En esta sección encontrarás los libros disponibles en nuestra biblioteca virtual',
        image: 'https://source.unsplash.com/random?books',
        imageLabel: 'Image Text',
    },
    {
        title: 'Explorar Clubes de lectura',
        description:
            'Aquí podrás conocer los clubes de lectura que tenemos en la USC',
        image: 'https://source.unsplash.com/random?books',
        imageLabel: 'Image Text',
    },
];

export default function Home() {
    return (
        <>
            <Header title="Club de Lectura - USC" sections={sections} />
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container >
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Footer
                title="Universidad Santiago de Cali"
                description="Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
        Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.
        Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional.
        
        Acreditada Institucionalmente en Alta Calidad a través de la Resolución No. 018144 del 27 de septiembre de 2021, emanada por el Ministerio de Educación Nacional.
        Ciudadela Pampalinda
        Calle 5 # 62-00 Barrio Pampalinda
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia        

        Sede Centro
        Carrera 8 # 8-17 Barrio Santa Rosa
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia

        Seccional Palmira
        Carrera 29 # 38-47 Barrio Alfonso López
        PBX: +57 (602) 518 3000 Ext. 9300-9301
        Palmira, Valle del Cauca
        Colombia"/>
        </>
    )
};