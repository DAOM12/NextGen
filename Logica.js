document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "MSI A520M PRO-AM4", imagen: "https://cdn.shortpixel.ai/spai3/q_lossy+ret_img+to_webp/holacompras.com/wp-content/uploads/2024/12/EC11510-5-2.png", descripcion: "₡29,500 IVAI" },
    { nombre: "GIGABYTE A520M DS3H V2-SOCKET AM4", imagen: "https://www.gigabyte.com/Image/575ac1fef60ff3a33d9978566683528b/Product/34364/webp/2000", descripcion: "₡42,500 IVAI" },
    { nombre: "ASUS TUF GAMING X670E-PLUS WIFI", imagen: "https://dlcdnwebimgs.asus.com/gain/4a38a9fc-f169-4c22-8874-c7d0db7548fe/w800", descripcion: "₡229,000 IVAI" },
    { nombre: "MSI MAG X870E TOMAHAWK WIFI", imagen: "https://asset.msi.com/resize/image/global/product/product_173553972848aa1ffa3b4923f7ff28db8e9e812a88.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", descripcion: "₡200,500 IVAI" },

    { nombre: "AMD RYZEN 5 5600GT – AM4", imagen: "https://extremetechcr.com/tienda/33368-large_default/amd-ryzen-5-5600gt.jpg", descripcion: "₡79,000 IVAI" },
    { nombre: "AMD RYZEN 7 8700G – AM5", imagen: "https://extremetechcr.com/tienda/33372-large_default/amd-ryzen-7-8700g.jpg", descripcion: "₡158,000 IVAI" },
    { nombre: "INTEL CORE ULTRA 9 285K", imagen: "https://www.techzilla.cr/wp-content/uploads/2025/05/Sin-titulo-1-77.jpg", descripcion: "₡389,000 IVAI" },
    { nombre: "INTEL CORE ULTRA 7 265KF", imagen: "https://cyberteamcr.com/wp-content/uploads/2024/11/cpilu7265k.webp", descripcion: "₡254,000 IVAI" },

    { nombre: "KINGSTON FURY BEAST RGB DDR4 3600MHZ – 16GB", imagen: "https://media.kingston.com/kingston/product/FURY_Beast_RGB_Black_DDR4_1_angle-zm-lg.jpg", descripcion: "₡25,800 IVAI" },
    { nombre: "KINGSTON FURY BEAST RGB DDR5 6000MHZ – CL40 – 32GB", imagen: "https://igamingcr.com/wp-content/uploads/2025/03/KF560C30BBEA-16-1000x1000.webp", descripcion: "₡68,400 IVAI" },
    { nombre: "V-Color Prism Pro RGB 32GB DDR4 3200MHz", imagen: "https://igamingcr.com/wp-content/uploads/2021/09/TL1636818A-E6PRSWK-1000x1000.webp", descripcion: "₡126,000 IVAI" },
    { nombre: "KINGSTON FURY RENEGADE RGB DDR4 3600MHZ – 64GB", imagen: "https://igamingcr.com/wp-content/uploads/2024/04/KF436C18RB2AK264-1000x1000.webp", descripcion: "₡95,000 IVAI" },

    { nombre: "MSI RTX 3050 8G VENTUS 2X XS OC", imagen: "https://asset.msi.com/resize/image/global/product/product_166960589921f9f307f8c0fd60f8e0d76a76feda91.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", descripcion: "₡124,000 IVAI" },
    { nombre: "GIGABYTE RTX 4060 8GB WINDFORCE OC", imagen: "https://static.gigabyte.com/StaticFile/Image/Global/f73f25ae18a7ece55e9c011d0c7cb55d/Product/35380/webp/1000", descripcion: "₡183,500 IVAI" },
    { nombre: "ASUS TUF GAMING RTX 5080 16GB", imagen: "https://dlcdnwebimgs.asus.com/gain/844c1ce7-da33-4dd0-9c84-6c6a12e5d9bf/w800", descripcion: "₡875,000 IVAI" },
    { nombre: "MSI RTX 5090 32G GAMING TRIO OC", imagen: "https://asset.msi.com/resize/image/global/product/product_1737081391df0edd81daeead5bd52c24e71abeae13.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", descripcion: "₡1,778,000 IVAI" },

    { nombre: "Kingston NV3 NVMe PCIe – 500GB", imagen: "https://extremetechcr.com/tienda/39137-large_default/kingston-nv3-500gb-nvme-pcie-40.jpg", descripcion: "₡22,000 IVAI" },
    { nombre: "Adata Legend 860 PCIe Gen4 – 1TB", imagen: "https://webapi3.adata.com/storage/product/legend_860_pd_2000x2000_03.png", descripcion: "₡32,300 IVAI" },
    { nombre: "XPG Gammix S70 BLADE PCIe Gen4x4 – 8TB", imagen: "https://webapi3.adata.com/storage/product/s70_blade_a03.png", descripcion: "₡417,100 IVAI" },

    { nombre: "AZZA 850W 80+ GOLD – ATX 3.0", imagen: "https://www.azza.gg/cdn/shop/products/850G.jpg?v=1681961748&width=1000", descripcion: "₡62,000 IVAI" },
    { nombre: "ASUS ROG THOR 850W PLATINUM II", imagen: "https://dlcdnwebimgs.asus.com/gain/3E1823DB-E795-4FD8-8234-520263C90333/w1000/h732", descripcion: "₡128,000 IVAI" },
    { nombre: "MSI MAG A1250GL PCIE5 – 1250W", imagen: "https://asset.msi.com/resize/image/global/product/product_173331434662228fed2c8cb5ba11ac5de0eb21279a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", descripcion: "₡142,000 IVAI" },

    { nombre: "HYTE THICC FP12 – 3PACK", imagen: "https://cdn.sanity.io/images/mqc7p4g4/production/0cd4d555b92dd1297d3d78a11a744290d3008f09-3480x2460.jpg?w=1920&q=75&fit=clip&auto=format", descripcion: "₡51,600 IVAI" },
    { nombre: "ASUS TUF GAMING TF120 ARGB – 3PACK", imagen: "https://dlcdnwebimgs.asus.com/gain/e1ffea15-1cc7-469c-915b-293acf686cb2/w800/fwebp", descripcion: "₡41,500 IVAI" },
    { nombre: "COOLER MASTER 360L CORE ARGB – NEGRO", imagen: "https://extremetechcr.com/tienda/43227-large_default/cooler-master-masterliquid-360l-core-argb-negro.jpg", descripcion: "₡529,000 IVAI" },

    { nombre: "HYTE Y60 – Negro", imagen: "https://extremetechcr.com/tienda/27066-large_default/hyte-y60-negro.jpg", descripcion: "₡99,800 IVAI" },
    { nombre: "Antec Cannon – Gris", imagen: "https://extremetechcr.com/tienda/27509-large_default/antec-cannon-full-tower.jpg", descripcion: "₡259,000 IVAI" },
    { nombre: "DEEPCOOL CH160 – MINI-ITX", imagen: "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cases/CH160/Gallery/608X760/01.jpg?fm=webp&q=60", descripcion: "₡26,500 IVAI" },

    { nombre: "STEELSERIES APEX PRO WIRELESS GEN 3", imagen: "https://images.ctfassets.net/hmm5mo4qf4mf/2qRjmq8sglugWCZZQVCgPx/48adf4a522bdee3cd98c3e3ba4784c8c/apex_pro_tkl_black_img_buy_01.png__1920x1080_crop-fit_optimize_subsampling-2-3764.png?fm=webp&q=90&fit=scale&w=1920", descripcion: "₡164,000 IVAI" },
    { nombre: "LOGITECH GAMING PRO X 60 LIGHTSPEED", imagen: "https://extremetechcr.com/tienda/36258-large_default/logitech-pro-x-60-lightspeed-gx-optical-tactile-blanco.jpg", descripcion: "₡103,800 IVAI" },
    { nombre: "RAZER BLACKWIDOW V4 75% – BLANCO", imagen: "https://extremetechcr.com/tienda/33021-large_default/razer-blackwidow-v4-75-blanco-ingles.jpg", descripcion: "₡80,500 IVAI" },

    { nombre: "RAZER DEATHADDER V3", imagen: "https://extremetechcr.com/tienda/27943-large_default/razer-deathadder-v3.jpg", descripcion: "₡31,900 IVAI" },
    { nombre: "Logitech G Pro X Superlight 2", imagen: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/new-gallery-assets-2025/pro-x-superlight-2-mice-top-angle-white-gallery-1.png?v=1", descripcion: "₡75,501 IVAI" },
    { nombre: "Logitech G502 X LIGHTSPEED – NEGRO", imagen: "https://extremetechcr.com/tienda/24036-large_default/mouse-inalambrico-logitech-g502-x-lightspeed-para-juegos.jpg", descripcion: "₡57,300 IVAI" },

    { nombre: "PLAYSTATION 5 Pro Edición Digital 2TB", imagen: "https://igamingcr.com/wp-content/uploads/2024/11/CFI-7019-1000x1000.webp", descripcion: "₡399,000 IVAI" },
    { nombre: "Xbox Series S 512GB Edición Digital", imagen: "https://cms-assets.xboxservices.com/assets/bf/b0/bfb06f23-4c87-4c58-b4d9-ed25d3a739b9.png?n=389964_Hero-Gallery-0_A1_857x676.png", descripcion: "₡185,000 IVAI" },

    { nombre: "Valve Steam Deck OLED – 512GB", imagen: "https://igamingcr.com/wp-content/uploads/2025/02/STEAM-DECK-OLED-512GB-1000x1000.jpg", descripcion: "₡399,500 IVAI" },
    { nombre: "Asus X1504Z Ci5 – 8GB – 512GB SSD", imagen: "https://dlcdnwebimgs.asus.com/gain/6864c8a3-d4d7-414f-b5a4-80d193879606/w800", descripcion: "₡288,000 IVAI" },
    { nombre: "HP VICTUS 15 – CI5 – RTX-4050", imagen: "https://mx-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/a/z/azure_a14lkla_1imagenprincipalsintexto_c.jpg", descripcion: "₡472,000 IVAI" },
    { nombre: "ASUS TUF GAMING F15 – CI7 – RTX-4070", imagen: "https://igamingcr.com/wp-content/uploads/2024/10/90NR0FH7-M008M0-1000x1000.webp", descripcion: "₡888,000 IVAI" },

    { nombre: "PC MasterBuild – Intel Ultra 7 – RTX-5080", imagen: "https://igamingcr.com/wp-content/uploads/2025/02/IMG-20250422-WA0022-1000x1000.webp", descripcion: "₡1,729,000 IVAI" },
    { nombre: "PC EPIC BUILD – Ryzen 9 – RTX-5090", imagen: "https://igamingcr.com/wp-content/uploads/2025/02/IMG-20250422-WA0024-1000x1000.webp", descripcion: "₡2,949,000 IVAI" }
  ];

  const contenedor = document.getElementById("contenedor-productos");

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
    `;

    contenedor.appendChild(div);
  });
});

