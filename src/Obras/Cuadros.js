import leov from "../assets/img/leov.png";
import virgol from "../assets/img/virgol.jpg";
import libras from "../assets/img/libras.jpg";


const cuadros = [
    {
        id: 1,
        name: "Leo en Venus",
        img: <img src="leov" alt="" />,
        descripcion: "cuadro de 20cm x 30 cm",
        artista: "Heralda",
        price: 1500
       
    },
    {
        id: 2,
        name: "Luna en Virgo",
        img: <img src="virgol" alt="" />,
        descripcion: "cuadro de 20cm x 30 cm",
        artista: "Heralda",
        price: 1800
    },
    {
        id: 3,
        name: "Sol en Libra",
        img: <img src="libras" alt=""/>,
        descripcion: "cuadro de 20cm x 30 cm",
        artista: "Heralda",
        price: 1950
    },
  ];

  const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cuadros)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch;