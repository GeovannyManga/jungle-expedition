"use client";

import { createContext, ReactNode } from "react";

// Define el tipo de los datos para mayor claridad
interface RoomDescription {
  ubicacion: string;
  alojamiento: string;
  servicios: string;
  actividades: string;
  opiniones: string[];
}

interface Room {
  id: number;
  title: string;
  location: string;
  price: number;
  img: string;
  bannerImage: string[];
  description: RoomDescription;
}

type RoomsContextType = {
  rooms: Room[];
};

// Creamos el contexto con un valor por defecto vacío
const RoomsContext = createContext<RoomsContextType>({ rooms: [] });

type Props = {
  children: ReactNode;
};

const RoomsProvider = ({ children }: Props) => {
  const rooms: Room[] = [
    {
      id: 1,
      title: "Abril Hotel",
      location: "zaino, Tayrona",
      price: 80000,
      img: "/abril.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751771911/samples/detailsTuBooking/abril/AF1QipM_bqNSbjQbGUVTi2WTiofrJVbwJ2f3FGqN0qnZ_s1360-w1360-h1020-rw_eozdo4.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751771936/samples/detailsTuBooking/abril/AF1QipOTr1Q8mbla1axH9dPsYdIbjcrQw_Vklx3alhp0_s1360-w1360-h1020-rw_kqeg6k.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751771951/samples/detailsTuBooking/abril/AF1QipOjFBri86vmOPGpXmcA1ozHbX-kwA2_yD3rf3hS_s1360-w1360-h1020-rw_mgrrrf.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772102/samples/detailsTuBooking/abril/AF1QipNeRStYSPIHZeoA5m5cONgNTDRgZOHzf1eZ8PLU_s1360-w1360-h1020-rw_xhtawa.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772161/samples/detailsTuBooking/abril/AF1QipN6VgVNDvr65hOMIAKseeY9a0DGLlY7F3NEIk-g_s1360-w1360-h1020-rw_wznj84.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772227/samples/detailsTuBooking/abril/AF1QipOmblYmoM7xXbAOcUbsjK2R_XbVDdEF_VYQq0aZ_s1360-w1360-h1020-rw_ylaczf.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772269/samples/detailsTuBooking/abril/AF1QipO5aIKmx41K9N9WDcgHlQrDoc_l5vkhZvBQj5Ug_s1360-w1360-h1020-rw_icuvot.webp",
      ],
      description: {
        ubicacion:
          "Sector El Zaino, Parque Tayrona. A solo 1 minuto del ingreso principal.",
        alojamiento:
          "Habitaciones cómodas con aire acondicionado. Ideal para parejas, familias o viajeros que buscan tranquilidad cerca del parque.",
        servicios:
          "✔ Desayuno incluido\n✔ Aire acondicionado\n✔ Wi-Fi\n✔ Restaurante\n✔ Atención amable y personalizada",
        actividades:
          "Relajarse en un entorno natural, explorar el Parque Tayrona, visitar las playas cercanas.",
        opiniones: [
          "“Una excelente opción para descansar antes de entrar al Tayrona. Cómodo y muy bien ubicado.”",
          "“Personal amable, buena comida y habitaciones frescas. Recomendado para familias.”",
        ],
      },
    },
{
  id: 2,
  title: "EcoHostal Yachay Tayrona",
  location: "Cañaveral, Tayrona",
  price: 505900,
  img: "/eco.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772435/samples/detailsTuBooking/yachay/AF1QipNQ8WS8RpAM-SQ_d8KVXrd0XdBJnj8MNLrSD6CS_s1360-w1360-h1020-rw_zcmspo.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772549/samples/detailsTuBooking/yachay/AF1QipNEsfGimkPp7Efqbt8fPPFCie8ZQZlNt2CjkTla_s1360-w1360-h1020-rw_tixxgm.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772654/samples/detailsTuBooking/yachay/AF1QipMkWPssGmJWzOTT2iEcWy7kTwUYsknnzw9xRjd5_s1360-w1360-h1020-rw_u3kfuz.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772700/samples/detailsTuBooking/yachay/AF1QipOIfpkaYuudM_7P1aqwbaHxhD_XVo3N06sBlEA6_s1360-w1360-h1020-rw_yqisj2.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772741/samples/detailsTuBooking/yachay/AF1QipMwDH8KCklOOTYRdsIQThlFwVXR6daWC2L5SUPQ_s1360-w1360-h1020-rw_zn9zen.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772838/samples/detailsTuBooking/yachay/AC9h4noeKuQKzbcHb8nEodnlkYLjv1ZWeOphBnuUZhWc2-GGDWap38Xh_cxTuLj0DSK0FSzcNw05J5pxKIBOZt7jzpacHiJXMQyQCMnx9zuGr7K5eU7f_wm7khff9p-kk5pet-NzN8dQ_s1360-w1360-h1020-rw_mg8gyc.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751772918/samples/detailsTuBooking/yachay/AF1QipPpE20imMEoWEpO5AFph0PCsTcfwgHE6TFxaod9_s1360-w1360-h1020-rw_le7dov.webp",
  ],
  description: {
    ubicacion:
      "Ubicado en el sector El Zaino del Parque Tayrona, a 33 km de Santa Marta. Acceso peatonal de 10 minutos desde la entrada del parque o mediante minibús.",
    alojamiento:
      "12 habitaciones rodeadas de selva, algunas con balcón, aire acondicionado y jacuzzi. Opción de suites y habitaciones familiares.",
    servicios:
      "✔ Desayuno diario incluido\n✔ Restaurante gourmet con ingredientes locales\n✔ Spa, jacuzzi, yoga y meditación\n✔ Wi-Fi y parqueadero gratuitos",
    actividades:
      "Senderismo, snorkel, excursiones guiadas, visitas a pueblos indígenas o a la Ciudad Perdida. Zonas comunes con hamacas y playa privada.",
    opiniones: [
      "“Una experiencia ecológica y confortable en plena naturaleza”",
      "“Tranquilidad total, ideal para reconectar con uno mismo y con el entorno”",
    ],
  },
},
   {
  id: 3,
  title: "Ecohabs Bamboo Parque",
  location: "Cañaveral, Tayrona",
  price: 554400,
  img: "/ecohabs.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773071/samples/detailsTuBooking/bamboo/AC9h4noeH9WGRIJSDpEgOua4qt7qy98kM2xMkSJJUnWBjvz_n-rkRW-EDgs5cYeaPajfAhQLOENDGGGFKiXgT70MNztSXbFnleYMhdfRcQSvg_QY4VJwfnz95NC-n4oBSVYvzD58X_4J_s1360-w1360-h1020-rw_khkh9c.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773109/samples/detailsTuBooking/bamboo/AC9h4nrqA3PMusbiN-07mn28-o7bUraBJsLTJ1EIU7s4-W9tYGXQfyCSbfyZo58Wh4XN_7aJX2Zy-Zlvatv3cf8rHtThMETV_BiqTRsSg5jzKve_0gD9qExKEeJsZvY3oJawiGTkr9x0_s1360-w1360-h1020-rw_glns5y.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773164/samples/detailsTuBooking/bamboo/AC9h4noKv9XYyOutrl-xjbqLFPdgNaH7HrrpfHrVZHoJuVC5FeRIhZbh-qyXuaCBHNjqpKHYItgRqu5C6Xncl6YXT5falf59ODUu4t2UKQWkSIe70IE9filbXuaXjxzQHIhxnjFljsbM_s1360-w1360-h1020-rw_uczcby.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773198/samples/detailsTuBooking/bamboo/AC9h4noEJsx2zN5AinpvV3RndFmzzkJFDgEsliOsOYi9MytAqLENNIrqetcZC7cX677YmfTRSoU4bMgZVYxU8lsDZRj7xYc060KRQvJNAEnbll3mXpWnh1V1gEdMDwVdNo63yINl3RJHXg_s1360-w1360-h1020-rw_ifzlis.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773258/samples/detailsTuBooking/bamboo/AC9h4npOo9ULo1lK8yff7Jf5F86QJnHs886cEyW93zagaTMrBZnQdjIf8DavW7QNoFdWfkXwlsj34N1v0ymYAgc8LCiQGTGxM7Y54lKA2U0UMTjfShO2KxPgUMUhmBqP43meFLBiNrcqdQ_s1360-w1360-h1020-rw_j36nlj.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773288/samples/detailsTuBooking/bamboo/AC9h4nqPLUUWfoxaS-c_OGgtqJnwge4C04kbJ949HfW5-SZ34S4fRdid8Ai91uOr-GRrCFz6PBPzUUtt0rmYQ3359DOiESH06NwxEm8lRMcyNA0UtibpDoe_unBejgHgwJ_soxF7wXoc_s1360-w1360-h1020-rw_n4dyv4.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773349/samples/detailsTuBooking/bamboo/AC9h4nrZ91eQ9hEcmvjIAMyNeQ0rxnK-XNSSm0ST9jHkGX205v7l53FfGK6Y5gUM2AV9WX0KTuzoXft27juBErv3R82kVewnWUhOImeaCMSLL03VV9MkDfdrHlUvBBF-vIdO1tuBjn4ImQ_s1360-w1360-h1020-rw_nc9bso.webp",
  ],
  description: {
    ubicacion:
      "Ubicado dentro del Parque Nacional Tayrona, a 1 km de El Zaino, rodeado de selva tropical y naturaleza caribeña.",
    alojamiento:
      "Ecohabs de bambú con aire acondicionado, baño privado, terraza con hamacas y algunas con jacuzzi o tina. Diseño ecológico de lujo.",
    servicios:
      "✔ Desayuno buffet incluido\n✔ Restaurante de cocina caribeña\n✔ Spa con masajes\n✔ Wi‑Fi y parqueadero\n✔ Actividades como snorkel y caminatas",
    actividades:
      "Senderismo a playas como Castilletes y Arrecifes, relajación en la naturaleza, observación de fauna, experiencias guiadas dentro del parque.",
    opiniones: [
      "“Excelente ubicación y atención. Entorno natural inigualable”",
    ],
  },
},
  {
  id: 4,
  title: "Hotel Jasayma Tayrona Park",
  location: "Cañaveral, Tayrona",
  price: 152766,
  img: "/jasay.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773529/samples/detailsTuBooking/jasayma/AF1QipPLGKd_HywgVP7gTPMLEwc3d7aUjreTgW0pTQX6_s1360-w1360-h1020-rw_x4qlzb.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773598/samples/detailsTuBooking/jasayma/AF1QipPpbLgwvl3GMEJsb3Q_PTwmVvZEjL0VdGfVRzvT_s1360-w1360-h1020-rw_kp4orh.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773664/samples/detailsTuBooking/jasayma/AC9h4noHYqowSytnH5EvwKahVxNL8PnRU2noDOr-wfYz_YERvQvtBOs6IioRg3gK739Jxb9LettKKdKhNUexEq734XeWvUVcBVDDc5XaljlZfA2r15twJ4QyMH2QKakxWmX5cowa8S7__s1360-w1360-h1020-rw_p7nkht.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773704/samples/detailsTuBooking/jasayma/AF1QipPOxydjCkUa6xiZ1FY9ayXguyAt8M_6MfoD4y1N_s1360-w1360-h1020-rw_ajan7z.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773750/samples/detailsTuBooking/jasayma/AF1QipMIcsnlVl6dTjULnfE0aH9tkqSKMCnyPQVLRv9B_s1360-w1360-h1020-rw_f0mylx.webp",
  ],
  description: {
    ubicacion:
      "Situado dentro del Parque Tayrona, a solo 1 km entre Zaino y Cañaveral. Acceso directo a senderos y playas sin transporte adicional.",
    alojamiento:
      "Habitaciones y bungalows con techo de palma integrados al entorno natural, algunas con balcón y vistas a la selva o montaña. Baño privado o compartido.",
    servicios:
      "✔ Wi‑Fi en áreas comunes (limitado)\n✔ Desayuno incluido\n✔ Estacionamiento\n✔ Traslado al aeropuerto\n✔ Lavandería\n✔ Masajes y asesoría turística",
    actividades:
      "Avistamiento de aves y fauna, caminatas por senderos del parque, relajación en hamacas o jardín, conexión con la naturaleza.",
    opiniones: [
      "“Ambiente tranquilo rodeado de naturaleza, ideal para desconectar”",
      "“Comodidad rústica en armonía con el entorno”",
    ],
  },
},
   {
  id: 5,
  title: "Glamping Jazayma",
  location: "Cañaveral, Tayrona",
  price: 220000,
  img: "/jglamping.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751774145/samples/detailsTuBooking/glampingjasayma/AF1QipNNQB8M4kIbBiYdzfF3s5cXT6cEb85D3xk6hZlk_s1360-w1360-h1020-rw_fgchrp.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751774238/samples/detailsTuBooking/glampingjasayma/AF1QipNo4Tyjn9jaw94L8L_VrM-0DHL201XccsXuTwfu_s1360-w1360-h1020-rw_q5z2mb.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751774301/samples/detailsTuBooking/glampingjasayma/AF1QipNfUgnppmxfsP2fiSaQkMn7xHxyaiSkQP8ULMVV_s1360-w1360-h1020-rw_xu6zle.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751774386/samples/detailsTuBooking/glampingjasayma/AF1QipP3u8xCnhiBPuWgYYBwPeCASmVU8OxzfZWEw42d_s1360-w1360-h1020-rw_rts07k.webp",
  ],
  description: {
    ubicacion:
      "A solo 8 minutos caminando de Playa Castilletes, dentro del Parque Tayrona, con entrada privada al parque.",
    alojamiento:
      "Carpas y bungalows rústicos pero cómodos, con camas, ropa de cama, toallas y baño privado (algunas unidades comparten baño).",
    servicios:
      "✔ Wi‑Fi gratuito\n✔ Parqueadero privado\n✔ Desayuno incluido (americano, vegetariano o vegano)",
    actividades:
      "Caminatas por senderos naturales, amaneceres en la playa, observación de flora y fauna, y descanso en un entorno ecológico.",
    opiniones: [
      "“Dormir con el sonido del mar y despertar con los cantos de la selva fue mágico”",
      "“Glamping cómodo y muy bien ubicado, ideal para desconectar”",
    ],
  },
},

   {
  id: 6,
  title: "Mirador del Parque Tayrona",
  location: "Cañaveral, Tayrona",
  price: 145350,
  img: "/nene.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751776119/samples/detailsTuBooking/mirador/AF1QipPeEdMi2tv8sEYF7Uf4wDiEl_fjI_08qWdl80xY_s1360-w1360-h1020-rw_xevcn9.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751776185/samples/detailsTuBooking/mirador/AF1QipN05FWMtGPHJuoMMbIGCgpmCYS7PbHbjdrZtNaT_s1360-w1360-h1020-rw_huxjwe.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751776245/samples/detailsTuBooking/mirador/AF1QipOtndnXbKeQOd2RmyV9Hg5B7wreNrwY-WRlPz5q_s1360-w1360-h1020-rw_fh6ghq.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751776421/samples/detailsTuBooking/mirador/AF1QipPBakOKBqvv1fyXMTZ67ZLBPiKul2o4sqblnwGf_s1360-w1360-h1020-rw_ptqvdl.webp",
  ],
  description: {
    ubicacion:
      "Dentro del Parque Tayrona, en el kilómetro 1 entre Zaino y Cañaveral. Desde aquí puedes caminar hacia La Piscinita, Arrecifes, Arenilla y Cabo San Juan.",
    alojamiento:
      "6–7 habitaciones con terrazas privadas y vistas a la selva, las montañas y en días despejados, los picos de la Sierra Nevada. Ambientes sencillos, sin lujos.",
    servicios:
      "✔ Wi‑Fi gratuito\n✔ Desayuno diario\n✔ Restaurante de comida caribeña\n✔ Estacionamiento\n✔ Consigna de equipaje\n✔ Baños compartidos",
    actividades:
      "Senderismo, avistamiento de aves, billar, masajes, buceo, snorkel, hípica y transporte interno al parque.",
    opiniones: [
      "“La atención fue excelente, Casimiro es un gran anfitrión”",
      "“Me sentí como en casa, con comida deliciosa y vistas espectaculares”",
    ],
  },
},
  {
  id: 7,
  title: "Eden Tayrona Park",
  location: "Cañaveral, Tayrona",
  price: 278460,
  img: "/eden.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751778774/samples/detailsTuBooking/eden/AC9h4nrV9b9gWPpEN66WUgLVesyQJNCCdc2uOoj0T_75ezr6hosHq4Ft8qgu001wjOk__wRu2bQeFSzsS_Qxag32cSEXGB74KJnNcuFtxalHGW1eAdNaoe1-KkKlfe8Dm9EH4N6ftWXoY1rKKdZG_s1360-w1360-h1020-rw_mhujob.webp",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqeID2dYr6XpY2x7-85qt-qhU_BDOXbbpEz2Yfmd8jXmlxLd7e3v6A2EOS4vOp8HWYI8LACyI162xW6A2TLyReJWa9WAb18BaIspyC5oW0M25OdMfcdfYM378qk9Iq9ZOi5nNl4WVfyT97T=s1360-w1360-h1020-rw",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751778849/samples/detailsTuBooking/eden/AC9h4nobYVEzF-O1DB5yVPJfTUXvDxE3NvlQXJRg3V-0nAFNEDubBZiNZSJeFZkvynnV-exUBCF-UM8UO1sUabGMeevtyiCYeVN8Eyckt7vZi-M7D4MIu20rWfd0sfli-dfT5sy4TWY3k1oylrXD_s1360-w1360-h1020-rw_fzhkra.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751778919/samples/detailsTuBooking/eden/AC9h4nryZGbuCtP0GsxYTk0rq4t2VXbozRRJtGdGsgfzznXlAFNEJpyb1oYeJ79w7530dfTTvyOPAiXQXRp4glJX1jMaghtzif56U4kL9mwQCOe5TsPcY5zY04hxQqcw3Sat8Id_l6CiIb8kQ4Un_s1360-w1360-h1020-rw_nrt91c.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751778958/samples/detailsTuBooking/eden/AC9h4nqRQWxdeZveCTzfjZDgstNHvblkCzNgTbtLTk3VL6g2Rpo1QbzBLF9A1faIkHva6eHqfCHkbFmMKT5HZ-Hu7J8JWnAbXqasCLNYSdAr6uWDckp-HwC_80sxUlUhaVXWQIfv7ocskzbhAjzb_s1360-w1360-h1020-rw_ba4rtf.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779029/samples/detailsTuBooking/eden/AC9h4nqOvscT58BpchSuOQSiWPUSFzYUAwYkvk23epqC9-smZ4SD2Z0MorxpXIA0GI_kxzXXkLM_ebCNHrqQkEGD7fi-ue4jycDGy7RnMYfO3fPFNi9KpUhVqTgwcg4kafR49Pw3ZtGEiQ_s1360-w1360-h1020-rw_tkhkb3.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779081/samples/detailsTuBooking/eden/AC9h4nph0rr_SZqajW4A4jigFkuj8ohDyHOaZ0ELvw8s47rdYjG9gFuwaOtkp_CLDmqPCcdvGf0ohDhxsQscCwryinDtzD_kPXQZJimlWuISWfQv9zZHORCiWCffuHWLTNjh5uETK8AK2c1Ud9s_s1360-w1360-h1020-rw_hj9t8z.webp",
  ],
  description: {
    ubicacion:
      "Ubicado en plena selva tropical, justo al borde del mar Caribe. Se accede caminando desde El Zaino, conectando con playas como Castilletes, Arrecifes y La Piscina.",
    alojamiento:
      "Habitaciones sencillas pero acogedoras con baño privado, ropa de cama, toallas, balcón o terraza con vista al jardín o la montaña. Techos de palma, madera, y ventilación natural.",
    servicios:
      "✔ Restaurante con desayunos, almuerzos y cenas temáticas\n✔ Spa y baños al aire libre\n✔ Traslado al aeropuerto (de pago)\n✔ Parking gratuito\n✔ Actividades culturales como clases de cocina y tours guiados",
    actividades:
      "Senderismo por el Parque Tayrona, observación de aves, clases culturales, y relajación en la playa o en hamacas bajo la sombra de la selva.",
    opiniones: [
      "“Trato muy amable, entorno espectacular y paz total en medio de la naturaleza”",
      "“Ideal para desconectar. Muy buena comida y atención personalizada”",
    ],
  },
},
  {
  id: 8,
  title: "Zirwa Hotel Boutique",
  location: "Cañaveral, Tayrona",
  price: 324201,
  img: "/zirwa.jpg",
  bannerImage: [
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779232/samples/detailsTuBooking/zirwa/AF1QipNh2svgAB8fZdF7B946e4nBzJ7LHPLxx2C8mhk-_s1360-w1360-h1020-rw_qvxo7i.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779281/samples/detailsTuBooking/zirwa/AF1QipMdq85yWlHZmED3dYTvz6PZIv04EjY9DSNgkAqw_s1360-w1360-h1020-rw_eu3dbq.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779325/samples/detailsTuBooking/zirwa/AF1QipO9DD4qW2aQh7dXsmH1wvTrTDJfJ9f_lTS8w4P3_s1360-w1360-h1020-rw_kqzymu.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779374/samples/detailsTuBooking/zirwa/AF1QipOzRd3earUplAWS2JqJi_vYC0nZdt7r2mZIzEWH_s1360-w1360-h1020-rw_bkibri.webp",
    "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779464/samples/detailsTuBooking/zirwa/AF1QipOAdREmlN5W6_PGNAgg8W7gsXPWeTQFs24fbo_y_s1360-w1360-h1020-rw_lzbxsk.webp",
  ],
  description: {
    ubicacion:
      "Situado dentro del Parque Tayrona, justo entre Zaino y Cañaveral, a solo unos pasos de la entrada al parque y la Playa Castilletes (aproximadamente 5 min a pie). A unos 35 km de Santa Marta y a 48 km del Aeropuerto Simón Bolívar.",
    alojamiento:
      "Cabañas amplias, eco‑sostenibles, con aire acondicionado, entrada privada, terraza con vista al jardín o montaña, escritorio, TV de pantalla plana, minibar y baño privado con ducha caliente. Ideal para parejas (solo adultos, mínimo 18 años, no se admiten niños).",
    servicios:
      "✔ Wi‑Fi gratuito\n✔ Restaurante con desayuno a la carta\n✔ Spa y bienestar (con cargo)\n✔ Traslado al aeropuerto\n✔ Minibar y aire acondicionado",
    actividades:
      "Relajarse en un entorno eco-natural, disfrutar del spa, caminatas por la selva, acceso cercano a la playa Castilletes.",
    opiniones: [
      "“Everything about this place was amazing. The place is picture perfect… the staff are friendly”",
      "“We enjoyed our stay in the eco hotel… would stay there again”",
    ],
  },
}
,
    {
      id: 9,
      title: "Hotel Colibrí Parque Tayrona",
      location: "Cañaveral, Tayrona",
      price: 400000,
      img: "/colibri.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779611/samples/detailsTuBooking/colibri/AF1QipPzyyUYT4GhwKHcrTmSND3-V1LvJHUGfXAyVDPu_s1360-w1360-h1020-rw_wou80b.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779650/samples/detailsTuBooking/colibri/AF1QipOS9ikpf3KhG1sv6Ile6EZxrwsJGLLBM9vuIC7E_s1360-w1360-h1020-rw_jdoden.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779695/samples/detailsTuBooking/colibri/AF1QipPU8beHfBOIjIH0om30qYd8vHOgzbwJekEu34g3_s1360-w1360-h1020-rw_ml0hcg.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779737/samples/detailsTuBooking/colibri/AF1QipPLt9WU5xNvnlmX3_2ezhNldp-VJc80TDmJ50JH_s1360-w1360-h1020-rw_mve7id.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779772/samples/detailsTuBooking/colibri/AF1QipMFE9_brhwGpHsQseDqYrsmEha-LoTlW3H9uZ3f_s1360-w1360-h1020-rw_ihul2n.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779822/samples/detailsTuBooking/colibri/AF1QipNexYTaRQ-160W4bawDt0m3VWdEw75R7Qh0gf2X_s1360-w1360-h1020-rw_joxnfq.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751779872/samples/detailsTuBooking/colibri/AF1QipMXD0Gx1p9wp1cexjXowrHmy1CS5ohjCs2C61Gm_s1360-w1360-h1020-rw_bv98ah.webp",
      ],
      description: {
        ubicacion:
          "El Hotel Colibrí está ubicado a solo 1.6 km de la entrada principal del Parque Tayrona (sector El Zaino), en un entorno natural rodeado de vegetación tropical y cerca de las playas del Caribe.",
        alojamiento:
          "Ofrece cómodas y modernas cabañas tipo suite, con aire acondicionado, baño privado, jacuzzi, terraza con hamaca y vista al jardín. Algunas habitaciones cuentan con piscina privada y zona de descanso al aire libre.",
        servicios:
          "✔ Piscina al aire libre\n✔ Jacuzzi privado en las habitaciones\n✔ WiFi de alta velocidad\n✔ Servicio de limpieza diario\n✔ Zona de spa con masajes\n✔ Parqueadero privado\n✔ Aceptan mascotas (bajo solicitud)",
        actividades:
          "A pocos minutos en carro de playas como Los Naranjos y Castilletes. Ideal para quienes desean explorar el Parque Tayrona, practicar senderismo, snorkel o simplemente relajarse en la naturaleza.",
        opiniones: [
          "“Un lugar mágico, muy tranquilo y rodeado de naturaleza. El jacuzzi privado es un plus”",
          "“La atención fue excelente, la habitación hermosa, muy romántica y limpia”",
        ],
      },
    },
    {
      id: 10,
      title: "Eco Hotel Amanecer Tayrona",
      location: "Cañaveral, Tayrona",
      price: 192982,
      img: "/amanecer.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780018/samples/detailsTuBooking/amanecer/AC9h4np4FqP4ymMXP1o6m9WlP9et4G7N-H6Z0WVzDN9IC_cMDPg429cKXP0jRmqrhJgAOoEIn7-J0bhGEf5I8qX6wa_q7dkToqtBpsx4AZSYC1FdqKQldjfbHiHAA_7MJrc8jDsgGoyuUA_s1360-w1360-h1020-rw_am8t7f.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780086/samples/detailsTuBooking/amanecer/AF1QipPTll_IjtYKau7gKUmHcg5av2HDrqCj2Th7bICO_s1360-w1360-h1020-rw_lisaym.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780122/samples/detailsTuBooking/amanecer/AC9h4npZna052_tljxkIBusMAyRBORiFzQSLCcgQ1kcorsPR_jp6gDyEt1E_dEmGS6fS-07-naruiTDupc11zxPAcXmNGyrw2mzp3cvVgp5eFqqpwHjR3wQMgUlC97agr4kxAKLehLqKzQ_s1360-w1360-h1020-rw_lquab0.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780173/samples/detailsTuBooking/amanecer/AF1QipPjs8RKal_CgfoaQeYjNwp9hHtqV150AKf2rJj1_s1360-w1360-h1020-rw_r9sx5c.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780284/samples/detailsTuBooking/amanecer/AC9h4npwdXPiA5QGFkX74ZQuWg90vEyW8j0bFpzSxzwzOhU_J8ayQ-ypG25AZQIB22wFVnijLFEktQoLcTig4_TKh3hgacsGPoao0XcQsn7qmRSrJFaWqmFg_wv2-EGkYZqpHSROPcmU0Q_s1360-w1360-h1020-rw_ocg1zw.webp",
      ],
      description: {
        ubicacion:
          "Ubicado dentro del Parque Tayrona, en el kilómetro 31, a 1.5 km de la entrada El Zaino, rodeado de selva tropical y muy cerca de la Sierra Nevada.",
        alojamiento:
          "Cabañas sostenibles como Bambú, Refugio de Amor y Jaguar. Algunas con aire acondicionado, todas con baño privado, WiFi, desayuno y acceso a la piscina.",
        servicios:
          "✔ Piscina con vista a la naturaleza\n✔ Restaurante de comida caribeña\n✔ Bar junto a la piscina\n✔ Coctel de bienvenida\n✔ WiFi y parqueadero gratis\n✔ Admite mascotas con restricciones",
        actividades:
          "Senderismo dentro del parque, paseos a caballo, tours guiados, snorkel y masajes. Ideal para explorar y descansar en la selva.",
        opiniones: [
          "“El ambiente hogareño es ideal… la comida es muy rica”",
          "“Personal muy amable y excelente atención”",
        ],
      },
    },
    {
      id: 11,
      title: "Tiny Houses Unique Tayrona",
      location: "Cañaveral, Tayrona",
      price: 413400,
      img: "/tiny.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780375/samples/detailsTuBooking/tiny/AF1QipMHSqK8qTxKchHqBPB9g0lluyY4QvmaIO5c5iEp_s1360-w1360-h1020-rw_dxu5dz.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780415/samples/detailsTuBooking/tiny/AC9h4nqU6B1AnJbV_NjDP3JjzN4XEYKvhkyfjUYrGwU30LkH2SiMyzwbNbMtI96WvTPuqKrg16xduvEMiPmbypQ4Xo4dec7DvYYtsO5q31ub7DM0yfl9lT09JBva3lBwP6L2CHJbAOrn_s1360-w1360-h1020-rw_ixoszm.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780451/samples/detailsTuBooking/tiny/AF1QipMCY-qmIsWD_6k5VqKES76hHwBRqUg13tPjQzEg_s1360-w1360-h1020-rw_uatz85.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780497/samples/detailsTuBooking/tiny/AF1QipOvvQeecRB1S0CDVoDJNNk0ImJa15SHhcyPHUKh_s1360-w1360-h1020-rw_uknpky.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780550/samples/detailsTuBooking/tiny/AF1QipPBeRbwQPQq-sDZcUkNcGWP_LZo18bgmukpHBoB_s1360-w1360-h1020-rw_nyet8z.webp",
      ],
      description: {
        ubicacion:
          "A pocos minutos de la entrada principal al Parque Tayrona (El Zaino), rodeado de bosque tropical y cercano al río Piedras.",
        alojamiento:
          "Tiny houses con cama doble, aire acondicionado, baño privado, terraza con hamaca y vista al bosque. Decoración moderna y sostenible.",
        servicios:
          "✔ Desayuno incluido\n✔ Aire acondicionado\n✔ Terraza privada\n✔ Atención personalizada\n✔ Conexión WiFi y zona de descanso",
        actividades:
          "Exploración del parque, caminatas por la selva, observación de flora y fauna. Ideal para relajarse y reconectar con la naturaleza.",
        opiniones: [
          "“Ambiente silencioso y natural, ideal para desconectarse”",
          "“Excelente atención y confort en medio de la selva”",
        ],
      },
    },
    {
      id: 12,
      title: "Magic Green Tayrona",
      location: "Cañaveral, Tayrona",
      price: 182100,
      img: "/magic.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780667/samples/detailsTuBooking/magic/AF1QipOOg-dr2EMz8wzKadStz7KuwNer7b3DFpYYJCKZ_s1360-w1360-h1020-rw_j7jwss.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780707/samples/detailsTuBooking/magic/AF1QipMv9-q862v7DtpqrhzU7tKp5R6HagKlSxgvZjU9_s1360-w1360-h1020-rw_ky8nlx.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780762/samples/detailsTuBooking/magic/AF1QipOESK6zgC2gt_Hl17k9InXLfvyy4DdpAnYtCI8p_s1360-w1360-h1020-rw_ym3wn1.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780805/samples/detailsTuBooking/magic/AF1QipPQthC7kC4a37ntXA3JabNVZq4Hdt2bx1k0OArP_s1360-w1360-h1020-rw_ydv5fl.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780873/samples/detailsTuBooking/magic/AF1QipML7EZwnZbBE0hUzBBQwocoFHTHu3NvJqqTNISb_s1360-w1360-h1020-rw_gof1tb.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780926/samples/detailsTuBooking/magic/AF1QipN4LipxURGW93rFykMum1bsYvbAdrviK5gJ7rdU_s1360-w1360-h1020-rw_yondlz.webp",
      ],
      description: {
        ubicacion:
          "Dentro del Parque Tayrona, en El Zaino, rodeado de selva y a pocos minutos a pie de Playa Castilletes.",
        alojamiento:
          "Cabañas y habitaciones tipo “Eco Habs” de madera y palma, con balcón, ventilador, baño privado, mosquiteras y ambiente rústico tipo glamping.",
        servicios:
          "✔ Desayuno incluido (vegano, vegetariano, americano)\n✔ Restaurante y bar\n✔ Piscina exterior\n✔ WiFi gratis\n✔ Estacionamiento privado\n✔ Traslados y tours (con cargo)",
        actividades:
          "Caminatas, visitas a cascadas, observación de fauna, cultura indígena y ecoturismo. Ambiente relajado para desconectar.",
        opiniones: [
          "“Ideal para desconectarse, rodeado de naturaleza”",
          "“Muy buena atención y cercanía con Playa Castilletes”",
        ],
      },
    },
    {
      id: 13,
      title: "Hostal Zirumake",
      location: "Cañaveral, Tayrona",
      price: 187550,
      img: "/zirumake.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781171/samples/detailsTuBooking/zirumake/AC9h4nr-bNgO48naPCzhkLrmswkv4VEATEEMvp4BW7n4Bj826ad6kQ1P-gzM77PJWL0_4Rt6tduGnYJR-qpPKDO9jVKd46YLtxqGHuZN-sPgoI0YeCTCLHlneqYM1OUulBc2OvRso5rc1yCUuTzr_s1360-w1360-h1020-rw_xasbev.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781217/samples/detailsTuBooking/zirumake/AC9h4npDT6NziKOVkoyQynWv5se8lxcPFqmqem0lvYnM7Bgo0VhGJjgCARDptn1olX5Hrhh9JtqFFcjpAgSo8aEyl9AXVJrok5ulJjfoMl4HSvAsBjU_cwL-P29lhbjtEy5vU8QlpmW3_s1360-w1360-h1020-rw_kckq4j.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781256/samples/detailsTuBooking/zirumake/AC9h4npeUrIy51U4p174AJbCZ-kL7GIyO_g16ALtvoCWmqhT9DN9Ur3Dmf06TKUkAxJy8IW2DWlxWjcbDvC0c7XICHyLoUWfg3QYiYquWo5q9j8gGnSwqR7dQa3H0cOklcBa5eoeRKlV_s1360-w1360-h1020-rw_yj2eso.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781294/samples/detailsTuBooking/zirumake/AC9h4noxF7J4TvKyxYanwyJAZbMOmunEP1AsCWp05z68fMR6djLxO9f5OMPWW1FOuUrOk2CsDqDUf9UNJooDekLGtTFYTK6WkFdI0uEqmAybrTSpGVCZ522UizVsUrEv5Cu57_LjcUpMOQ_s1360-w1360-h1020-rw_q0buii.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781345/samples/detailsTuBooking/zirumake/AC9h4np3-f3D2MN5kjpuuoAzp5_CT6HHua4WbIGH7gYBVgGs9QkvKknD0Z6Q0rgf4dKYPc1spw8pwiM3wF1OPnFgnnmVvtPdigqse18VEgX9Cfby-tWTFaryejnvUKsbpKsV0aSPtCi0EQ_s1360-w1360-h1020-rw_ngwceb.webp",
      ],
      description: {
        ubicacion:
          "A solo unos pasos de la entrada al Parque Tayrona y a 600 m de la Playa Castilletes, en la Vía Parque Tayrona km 30.",
        alojamiento:
          "11 cabañas rústicas con patio o terraza, vistas al jardín o selva, mosquiteras y ventilador. Ambientes comunes para relajarse como jardín y terraza.",
        servicios:
          "✔ Desayuno incluido\n✔ Restaurante, bar y snack-bar\n✔ Servicio de habitaciones y cambio de divisas\n✔ Traslado al aeropuerto (con cargo)\n✔ Wi‑Fi en zonas comunes\n✔ Estacionamiento gratuito",
        actividades:
          "Senderismo, snorkel, submarinismo, tours culturales, juegos de mesa, masajes y baños al aire libre en zona privada de playa.",
        opiniones: [
          "“Excelente atención familiar, comida deliciosa y un entorno paradisíaco”",
          "“Lugar perfecto para conectar con la naturaleza sin renunciar al confort”",
        ],
      },
    },
    {
      id: 14,
      title: "Casa de Campo Castillete",
      location: "Cañaveral, Tayrona",
      price: 192780,
      img: "/casacampo.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781513/samples/detailsTuBooking/casacampo/7QX6LHtG0azsUnCIBtifCZaVTXwT0DSPVl05vtmfnTTll1WitJzDe5DUULhkCwP-DA-pTUVSbiPH3bVjK9DGxK32V9sMWfmrFyXDyCE-YXdCkdoLdFI6BiDKe30kFItVaMgftpzs2mCqZfURSZCiCchbkuIW7Qo_s1360-w1360-h1020-rw_ni0upm.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781550/samples/detailsTuBooking/casacampo/AF1QipMzbg8x6KwGdbwlUYO88HMjyiEmfiXFnXXbm2E_s1360-w1360-h1020-rw_abzema.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781583/samples/detailsTuBooking/casacampo/RARVLzED91-MgxHEgFluxyz1UbuO1klH5T4WWrKhQAbJgw0ySDn72SDI1TCL86L78Kb5rvpNAKblfrY1vHnCoqUwlXgN5gWly1HMDE5r9YxjlSaTh87Z1ciIqc9csj67OeAQsYq0Rk40oyVlyud6N10S0jSVWw_s1360-w1360-h1020-rw_bky0hm.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781623/samples/detailsTuBooking/casacampo/zHEYV9D9pRwH36xNsDPyzPklrPCAK6nm1FYsqe6ME-7QVpoOKmY1xCXORT36qibIf34CDLg1JR5OvfNWXfQY98yDbzvvLP0bWfnDKkHV8FEFbaTkpTV5EObdQgO7E6AyPft1mn8Senjewh9NkW-ISaD96qxgk9Y_s1360-w1360-h1020-rw_mv7hey.webp",
      ],
      description: {
        ubicacion:
          "Situado dentro del Parque Tayrona, en El Zaino. A pasos de Playa Castilletes y rodeado de vegetación tropical.",
        alojamiento:
          "Habitaciones sencillas con baño privado y ventilador; también espacios para camping. Ambiente tipo finca-camping con servicios básicos.",
        servicios:
          "✔ Piscina al aire libre\n✔ Restaurante y bar\n✔ Traslados y Wi‑Fi en zonas comunes\n✔ Parqueadero (con costo adicional)",
        actividades:
          "Senderismo, observación de fauna, acceso directo a la playa. Ambiente natural ideal para desconexión.",
        opiniones: [
          "“La piscina y la playa casi privada son una maravilla”",
          "“Ambiente tranquilo, buena comida y atención excelente”",
        ],
      },
    },
    {
      id: 15,
      title: "Ecohabs Tequendama – Parque Nacional Tayrona",
      location: "Cañaveral, Tayrona",
      price: 714000,
      img: "/tequen.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781764/samples/detailsTuBooking/ecoteken/AF1QipN1tLXdKBTXunietBlzONe788G8c588sBsETlkA_s1360-w1360-h1020-rw_oiibzs.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781792/samples/detailsTuBooking/ecoteken/AF1QipPZeTemIBhdfzJbG2ZJMuOeRFjC7kVDZvfh-jvn_s1360-w1360-h1020-rw_ixorw4.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781824/samples/detailsTuBooking/ecoteken/AC9h4nqvLdIn860x7RcT-AuxDxkqfShFaZo19WM_-I8PBra8iMegpD-SAW48oAzsAe3aTpTDUBC1XGSE6rNeo76DKPT-hOBDNDb2DHVR3Rx_amBsYDGByqnBbxVVoCrYGCZPD4TA9Q5BuA_s1360-w1360-h1020-rw_ogpmwf.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781859/samples/detailsTuBooking/ecoteken/AF1QipNWPavXcjZKwAPHF-zWfufIIrDJUO5W82gi_L0S_s1360-w1360-h1020-rw_xlxi3g.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751781899/samples/detailsTuBooking/ecoteken/AF1QipN6cEfWzxLc9QPc4NHd1hKyRKHHjastS_ZcRlfw_s1360-w1360-h1020-rw_gxlsyk.webp",
      ],
      description: {
        ubicacion:
          "En la playa Cañaveral, dentro del Parque Tayrona. Construidos en medio de la selva con vista al mar Caribe.",
        alojamiento:
          "Ecohabs de dos niveles con techos de palma. Dormitorio, baño privado y terraza con hamacas. Categorías Superior y Deluxe, hasta 4 personas.",
        servicios:
          "✔ Restaurante con comida nacional e internacional\n✔ Spa con jacuzzi y masajes\n✔ Wi‑Fi en zonas comunes\n✔ Lavandería y parking\n✔ Recepción 24 h",
        actividades:
          "Excursiones a playas como Arrecifes y La Piscina. Relajación frente al mar, caminatas en la selva y experiencias culturales.",
        opiniones: [
          "“El lugar es mágico, te despiertas con el sonido del mar y rodeado de naturaleza”",
          "“Ideal para desconectarse y disfrutar en pareja o familia”",
        ],
      },
    },
    {
      id: 16,
      title: "Cabañas Tequendama – Parque Tayrona",
      location: "Arrecifes, Tayrona",
      price: 601000,
      img: "/tekencabana.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782314/samples/detailsTuBooking/cabanteken/AF1QipPy0sRAs8T5_uuXuSPuD1ddOd7tyNOJHFRNEZTN_s1360-w1360-h1020-rw_wrvty9.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782266/samples/detailsTuBooking/cabanteken/AC9h4nqsAEZh2pP6hNwd5_HoGSYrifx8UHDu_6VOi06LDaOiUn7AL-zYcykco6oziM26ieQkaFO9yzbn6HasInCdDyqSF_bpCnp1rAriPlEBESwoBnUzzB1PPoyNepUjnTh31u_VsIL5_s1360-w1360-h1020-rw_q20w9y.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782291/samples/detailsTuBooking/cabanteken/AF1QipPKPMQD9aoAAaRIHfhFyibnUAvKJN3sJugct0lo_s1360-w1360-h1020-rw_rq16pg.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782398/samples/detailsTuBooking/cabanteken/AF1QipPDjqTwTdkuuNJ44A7NdHUfw1cm9Hbt_NVEn8Fv_s1360-w1360-h1020-rw_umcz49.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782433/samples/detailsTuBooking/cabanteken/AF1QipNBNUL1wPpfjW20ivF5tRayDyCaK-KZBzw3_32s_s1360-w1360-h1020-rw_cdxjrw.webp",
      ],
      description: {
        ubicacion:
          "Ubicadas en Playa Arrecifes, dentro del Parque Tayrona, a una hora caminando desde la entrada El Zaino.",
        alojamiento:
          "Cabañas tipo Deluxe de dos niveles con techos de palma, terraza privada, camas dobles e individuales, ventilador o aire acondicionado, y baños privados. También zona de camping y glamping.",
        servicios:
          "✔ Desayuno incluido\n✔ Restaurante de cocina caribeña\n✔ Bar y Wi-Fi en áreas comunes\n✔ Estacionamiento seguro\n✔ Recepción 24 h\n✔ Limpieza diaria y caja fuerte",
        actividades:
          "Senderismo por la selva, acceso a playas como La Piscina y Cabo San Juan. Ideal para descansar en hamacas y disfrutar el entorno natural.",
        opiniones: [
          "“Una experiencia cómoda en medio de la naturaleza, excelente atención y ubicación”",
          "“Cabañas amplias y bien equipadas, muy cerca de playas hermosas”",
        ],
      },
    },
    {
      id: 17,
      title: "Camping Jacobo Bermúdez",
      location: "Arrecifes, Tayrona",
      price: 180000,
      img: "/jacobo.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782561/samples/detailsTuBooking/jacobo/jacobo_h5gcay.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782603/samples/detailsTuBooking/jacobo/AC9h4np4O2xexVN3CSbOzdbau-1g94M0704Cd8cSzEXpHaoFbXsO5K3pmwfBC1mypU_tevvqJvWcGLUhH2N6TnzkCnhokjLdkHiRoHe3w2joQ2u0ygQwMhPTSozwiDQSOrthkWxguaUS_s1360-w1360-h1020-rw_qjrz44.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782647/samples/detailsTuBooking/jacobo/AC9h4npAzkH3rc3Km8s0R8IAEu9eKQDSJhIbi_vho39ObWy7XwVCh8yCUKoTAnPi7VItxOLexgCxToM5o_m9F4fgDuxZuHB_RjtH71WQsmgLVazc3w1omUxsqwVa3EV-IhwsmyDgxN7S0Q_s1360-w1360-h1020-rw_gnihkf.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782696/samples/detailsTuBooking/jacobo/AC9h4noDKSYF3jPGqpGztXl9LyqK1ldycWv6EcZAS8h1mz1LNOCHi5b7q-JeKN5VgU3dsfqx7ofYhP9XUiQHQ4NmjwVCqgS7KRisc-BRWQvowbAPgWrSgTyYAfOhQ77QVFSdGTKSWvcr_s1360-w1360-h1020-rw_m1c9yj.webp",
      ],
      description: {
        ubicacion:
          "En el sector Arrecifes, dentro del Parque Tayrona. A 5 minutos caminando de Playa Arrecife, sobre el sendero de las 9 Piedras.",
        alojamiento:
          "Zonas de camping con tu propia carpa o alquiler de carpas dobles. Hamacas, energía solar y baños compartidos. Entorno ancestral y ecoamigable.",
        servicios:
          "✔ Baños y duchas comunitarias\n✔ Energía solar\n✔ Wi-Fi en zonas comunes\n✔ Restaurante básico y panadería\n✔ Lavadero y agua potable",
        actividades:
          "Senderismo, conexión cultural con historia ancestral, caminatas a playas cercanas como La Piscina y Cabo San Juan.",
        opiniones: [
          "“Tranquilo, rodeado de selva y con buena energía. Muy auténtico”",
          "“Perfecto para desconectarse, buena ubicación y precios accesibles”",
        ],
      },
    },
    {
      id: 18,
      title: "Happy Camping Arrecifes",
      location: "Arrecifes, Tayrona",
      price: 153000,
      img: "/happy.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782813/samples/detailsTuBooking/happy/AF1QipPBeFnpBrxbxw2W6jWaG1aCw8_ptxI9USLIHJ12_s1360-w1360-h1020-rw_hwwary.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782859/samples/detailsTuBooking/happy/AF1QipOz7tvHg0eJ3iN7J8QODw5pOLtcMo2PFHjP_rQ__s1360-w1360-h1020-rw_x45j1z.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782891/samples/detailsTuBooking/happy/AF1QipOYN8JpNvxsizCHtWn78hdlzAjVawnOKe9XYIMU_s1360-w1360-h1020-rw_mmhygq.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782921/samples/detailsTuBooking/happy/AF1QipNXSw-IDIEd17z9dpymuJUzZHSG0d4sw2yjRoV8_s1360-w1360-h1020-rw_zptrbe.webp",
      ],
      description: {
        ubicacion:
          "Sector Arrecifes, a 45 minutos caminando desde la entrada El Zaino del Parque Tayrona.",
        alojamiento:
          "Zona de camping con sombra natural, alquiler de carpas con colchonetas. Ambiente seguro, tranquilo y rodeado de vegetación.",
        servicios:
          "✔ Baños y duchas\n✔ Arriendo de carpas\n✔ Zona amplia para acampar\n✔ Entorno natural protegido",
        actividades:
          "Caminatas por el parque, acceso a playas cercanas, avistamiento de fauna. Ideal para mochileros y viajeros con bajo presupuesto.",
        opiniones: [
          "“Buena sombra, carpas cómodas y ambiente tranquilo. Volvería sin dudar”",
          "“Una experiencia muy bonita en medio de la selva. Ideal para desconectar”",
        ],
      },
    },
    {
      id: 19,
      title: "Cabañas y Camping Don Pedro",
      location: "Arrecifes, Tayrona",
      price: 50000,
      img: "/pedro.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751782994/samples/detailsTuBooking/don/AF1QipNm3tAEeRAiet1KSCH6AjfVx2PvAfdTXotI1HIE_s1360-w1360-h1020-rw_cfj5gg.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783031/samples/detailsTuBooking/don/AF1QipMTD4PkhqwQh8GvbL-zNCRaBvdesrrHJnx_D1aU_s1360-w1360-h1020-rw_gdss8b.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783070/samples/detailsTuBooking/don/AF1QipPd4KXdliSPqzNwddtDhW0M3krSo3qRI4LKRqfR_s1360-w1360-h1020-rw_afxeun.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783121/samples/detailsTuBooking/don/AF1QipMEgnNNWIYglHjgV6MBHRFVcioE8F67ekICJuQK_s1360-w1360-h1020-rw_tigozt.webp",
      ],
      description: {
        ubicacion:
          "Sendero principal hacia Arrecifes, Parque Nacional Tayrona – Santa Marta, Colombia. A pocos minutos de la playa.",
        alojamiento:
          "Zona de camping con sombra natural y piso nivelado. Cabañas rústicas en madera con camas cómodas, mosquitero y buena ventilación.",
        servicios:
          "✔ Baños y duchas compartidas\n✔ Restaurante con comidas típicas\n✔ Desayunos y snacks\n✔ Atención personalizada por familias locales",
        actividades:
          "Senderismo, exploración de playas, descanso en plena naturaleza. Ideal para mochileros y viajeros económicos.",
        opiniones: [
          "“Ambiente natural, atención cálida y precio justo. Muy recomendado”",
          "“Perfecto para una experiencia auténtica y tranquila dentro del Tayrona”",
        ],
      },
    },
    {
      id: 20,
      title: "Camping LUI",
      location: "Arrecifes, Tayrona",
      price: 110000,
      img: "/lui.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783210/samples/detailsTuBooking/LUI/AF1QipO84DpUuWmuti4XaNG3sAdsqgQIlSJ39vIiirOA_s1360-w1360-h1020-rw_y11jmc.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783249/samples/detailsTuBooking/LUI/AF1QipMgmBxfo3NASLP8RVJZCPM7-wYZQ2q2FQohAyEI_s1360-w1360-h1020-rw_t1ukyj.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783295/samples/detailsTuBooking/LUI/AF1QipN4Tm-zqGxt52au3pCdgBRp0nao6p5-p7AoYIaA_s1360-w1360-h1020-rw_qdyb4j.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783339/samples/detailsTuBooking/LUI/AC9h4noxCBVpC-G2zcxmbIDgQi5O83eLy2JOdL3_g5qAfFpAriK82yPH8qG7NFThA3tf8jIFaxdZVDwPTRUgFGbuk9XGUIYXM_YYZCkAA8CaZgT3gvwlABGZ_s8xnjgJekOIZNHHrIKVXQ_s1360-w1360-h1020-rw_txkyz4.webp",
      ],
      description: {
        ubicacion:
          "Cerca de Playa Arenilla, a 1 h 20 min caminando desde la entrada de Cañaveral. Rodeado de selva tropical.",
        alojamiento:
          "Cabañas rústicas con colchones y almohadas, zonas de hamacas con toldillo, áreas de camping bajo sombra natural.",
        servicios:
          "✔ Energía solar\n✔ Baños compartidos\n✔ Zonas de descanso\n✔ Manejo ecológico de residuos",
        actividades:
          "Senderismo, acceso a Playa La Piscina (20 min) y Cabo San Juan (45 min), avistamiento de fauna y flora local.",
        opiniones: [
          "“Entorno natural muy tranquilo, ideal para desconectar”",
          "“Excelente ubicación para explorar varias playas y senderos del Tayrona”",
        ],
      },
    },
    {
      id: 21,
      title: "Arrecifes Refugio Natural",
      location: "Piscina, Tayrona",
      price: 900000,
      img: "/refugio.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783417/samples/detailsTuBooking/refugio/AF1QipPPCCdE7_Aoys6WRFtdkw2GflAJBlNgL71YMgMi_s1360-w1360-h1020-rw_qhqrrf.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783460/samples/detailsTuBooking/refugio/AF1QipNFPWk38wS77dgArO-vOf-6iVS6NdxeHsVIRbgQ_s1360-w1360-h1020-rw_os0vrw.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783489/samples/detailsTuBooking/refugio/AF1QipM5t-2rJSMySRfP_eGG6G0Dn1KibdpOkhu6nk27_s1360-w1360-h1020-rw_qb7ind.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783522/samples/detailsTuBooking/refugio/AF1QipPxq4mVbVEu2G9Qpq8Lm5SghaSfQL1EKuh9Nrg5_s1360-w1360-h1020-rw_pet3cy.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783603/samples/detailsTuBooking/refugio/AF1QipMHjFZtT2jJiW1e-PO0k8WgJiTrJkqs0wL14VmD_s1360-w1360-h1020-rw_rgbn2e.webp",
      ],
      description: {
        ubicacion:
          "Frente a Playa La Piscina, a 45 minutos caminando desde la entrada El Zaino, en el Parque Tayrona.",
        alojamiento:
          "Cabañas ecológicas de dos niveles construidas en madera y palma, con terraza y hamacas. Capacidad para hasta 5 personas.",
        servicios:
          "✔ Restaurante en el lugar\n✔ Área de camping y hamaqueros\n✔ Baños y duchas compartidas\n✔ Lockers y Wi-Fi en zonas comunes",
        actividades:
          "Snorkel en Playa La Piscina, caminatas por la selva, avistamiento de flora y fauna, relax frente al mar.",
        opiniones: [
          "“Excelente ubicación frente a una de las mejores playas del Tayrona”",
          "“Tranquilo, rodeado de naturaleza y bien atendido. Ideal para familias o grupos pequeños”",
        ],
      },
    },
    {
      id: 22,
      title: "Camping Cabo San Juan del Guía",
      location: "Cabo San Juan, Tayrona",
      price: 70000,
      img: "/cabos.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783817/samples/detailsTuBooking/cabo/AC9h4nrsZF8Vid3Vj-piASXYT-FRhqQVuqLMRIT95GWcZwRnwKR1hjgEhEEzkens4ZqNPXI-Rgy-iyRZaBDYJPF3eveKRWUQVBK1oLp5Dva3wPbSr2Binbn0FSISihKUIp892WdpSyOt_s1360-w1360-h1020-rw_dcabtn.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783686/samples/detailsTuBooking/cabo/AC9h4nqoaGqbRSegqc4iZ7VkBswJGLoskbJFN6bYWuDeZcPbpAYCCT_67rdjs3a8jdJwx8AgbzI1v4qdpAy46qa6FeUsURY0Xp_XYR1apz8ZyRori3V_KP8p-c7AKJIpXJJh24kiiTeF_s1360-w1360-h1020-rw_btwgxe.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783738/samples/detailsTuBooking/cabo/AC9h4noXD9p5jEiI-EAkD7uf53ONcOFIoQkcQeLtflfW2bBUgXmuKYCjpe9uV6V07FeSz3mrfbekI9iTnkfsR9c0zs-lIg3ZtAhS_uAd3P8TgKAlNsPl3sUVMB6tFCWzEUSoougmh2zb0g_s1360-w1360-h1020-rw_qp9xbr.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783776/samples/detailsTuBooking/cabo/AC9h4nrqDGH8-VdSRvJABHfn3d4DQIo_1kdK24JAOqjAmI5E9w9PSHJ5zDy_SJehdGGxOy44nnCUGiW-JQXzUq5MtfIWAm2OHtcNJD2L3qGnP3PViuNzra5gGN15oiFql92raXeL2pc_s1360-w1360-h1020-rw_hhenke.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783867/samples/detailsTuBooking/cabo/AC9h4nrvl5L1TPNdOkeAfLTkmmElh-Z89a4NTgOpJL8e32KYeBimiOpMfxJ89KYOaEzSTiQcXnV_K7lihVAjznPjKU3Vxe8ZoGHtIGmhgnD0Fkjn1rFJmIRJ6oFa_5sY-HblGlbjmbi3_s1360-w1360-h1020-rw_weh5cw.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751783917/samples/detailsTuBooking/cabo/AC9h4nr9v2jTqazsT_lDkU2x-yAwxwhui-PVewPyl6VDKSFt6NOLurI4mdBveOV0v0tVGmU_a5kvgGenRV49z91Ib_ofyIwBTO3sITqcQsLc7i-M7qAlkUUukn8cNbKYQHVOOWW-jFFz8Q_s1360-w1360-h1020-rw_wbnedw.webp",
      ],
      description: {
        ubicacion:
          "Playa Cabo San Juan del Guía, Tayrona. A 2–2.5 h caminando desde El Zaino o 50 min en lancha desde Taganga.",
        alojamiento:
          "Zonas para acampar, alquiler de carpas o hamacas. Servicios básicos: baños, duchas, lockers, electricidad.",
        servicios:
          "✔ Restaurante frente al mar\n✔ Lockers y duchas\n✔ Generador eléctrico\n✔ Tienda de snacks y bebidas",
        actividades:
          "Nadar en la playa protegida, ver el amanecer y atardecer, caminatas a Playa Brava o miradores cercanos.",
        opiniones: [
          "“Una experiencia única dormir junto al mar y despertar con el sonido de las olas”",
          "“Playa segura, buen ambiente y excelente punto para explorar más el parque”",
        ],
      },
    },
    {
      id: 23,
      title: "Playa Brava",
      location: "Playa Brava, Tayrona",
      price: 70000,
      img: "/brava.jpg",
      bannerImage: [
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751784254/samples/detailsTuBooking/brava/AC9h4noJtAB-ohRzMtTgdvVP-zRbrapwKgmmG2h41tRxYGMHmEkaC6FY3Bj6h4ZDcI_vp86k6qg9uSXyUWjecjquj5Pc5MZkSWPby9BszCvpHXR4r_W39Uf0BeDA28DXxHIASCUbQ9i_hA_s1360-w1360-h1020-rw_fog11f.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751784307/samples/detailsTuBooking/brava/AF1QipOZGLOhSTp2ncwoNpZe89iw6r5HDYb0W-Tsulz6_s1360-w1360-h1020-rw_qwbfeh.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751784342/samples/detailsTuBooking/brava/AF1QipN3QwD8fMi7jmUSZcI6kcekXam1uP7GLCJjfXYn_s1360-w1360-h1020-rw_y002vb.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751784387/samples/detailsTuBooking/brava/AC9h4nqEjMpIKNpHDqP87gjXDWTT2Ad7Iv3BmZ8Qt_8vM6xjeLUi2qe7u2YUlaFBZE9aqw7xFFM3Ory21FNwMnmZ9Y_yc3fVm9To-vFK3U0JktALarl5DJaUIOq85zP5kSo53J0GdSYt_s1360-w1360-h1020-rw_cdp0la.webp",
        "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751784421/samples/detailsTuBooking/brava/AF1QipMOYUjqcPT6_vnaB3vuYmzFIQZRa7XKCUeLKseI_s1360-w1360-h1020-rw_bi0rq5.webp",
      ],
      description: {
        ubicacion:
          "Vertiente norte de la Sierra Nevada. Acceso por trekking: 4–5 h desde Calabazo o 6–7 h desde El Zaino/Cabo San Juan.",
        alojamiento:
          "Ecolodge Teyumakke con cabañas rústicas, hamacas frente al mar, zonas de camping, restaurante en sitio.",
        servicios:
          "✔ Restaurante\n✔ Hamacas y carpas para alquilar\n✔ Cascada cercana\n✔ Caballos o motos para equipaje desde Calabazo",
        actividades:
          "Trekking, avistamiento de fauna, contemplación de estrellas, relajarse en playa virgen, visitar la cascada cercana.",
        opiniones: [
          "“Desconexión total, playa sin turistas y contacto profundo con la naturaleza”",
          "“Acceso difícil, pero vale completamente la pena por su belleza salvaje”",
        ],
      },
    },
  ];

  return (
    <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>
  );
};

export { RoomsContext, RoomsProvider };
