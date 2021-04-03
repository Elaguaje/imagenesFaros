const d = document;

export function dataset(carrusel){
const $carousel = document.querySelector(".carousel-inner"),
    $fragment = document.createDocumentFragment();
  let  $myCarousel = d.querySelector(carrusel),
    $slider = new bootstrap.Carousel($myCarousel, {
  interval: 1000,
});

    let img =[
	{src:"https://user-images.githubusercontent.com/81041775/113483811-8ab8ba00-9462-11eb-99fc-d7fe6ad6405a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483814-8d1b1400-9462-11eb-91e2-003968e983b9.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483816-90160480-9462-11eb-8082-d96680733708.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483818-9310f500-9462-11eb-82b4-46aa478d736f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483819-95734f00-9462-11eb-92cc-9c374265500c.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483821-986e3f80-9462-11eb-9d5b-f798d6213983.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483825-9ad09980-9462-11eb-8821-2cb75ea8ee96.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483827-9dcb8a00-9462-11eb-92aa-0171e6e48470.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113483830-a0c67a80-9462-11eb-80b0-05d4da155822.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483832-a3c16b00-9462-11eb-86ad-2ce391c9d9fc.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483833-a6bc5b80-9462-11eb-88aa-9cbca052d249.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483836-a9b74c00-9462-11eb-918f-8c2e6680e0dc.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483841-ac19a600-9462-11eb-9f83-1b2f0dbeb0a9.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483842-afad2d00-9462-11eb-8ebe-220631f39797.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483847-b2a81d80-9462-11eb-9d09-c24a26abb390.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483852-b50a7780-9462-11eb-8da9-4151aee9390a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483855-b8056800-9462-11eb-87a6-90e3fce6cee3.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483857-bb005880-9462-11eb-92cb-fcd47976e89a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483861-bdfb4900-9462-11eb-980a-51b877546699.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483863-c0f63980-9462-11eb-94e6-6c58d206fc63.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483868-c3f12a00-9462-11eb-967e-741f284edc8c.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483872-c81d4780-9462-11eb-926d-de50a5005c9b.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483873-cc496500-9462-11eb-9718-0789b88ac65d.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483876-cfdcec00-9462-11eb-97da-12603ea4885f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483879-d2d7dc80-9462-11eb-8342-852569363953.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483883-d53a3680-9462-11eb-9817-b22f4aa9f653.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483889-d8cdbd80-9462-11eb-9a76-059b3a8e4511.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483893-dc614480-9462-11eb-820c-465d486d673e.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483900-e08d6200-9462-11eb-846d-747d07af4106.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483902-e420e900-9462-11eb-9729-a907dc0a61b6.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483906-e84d0680-9462-11eb-80d4-625c4306f3f2.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483911-ed11ba80-9462-11eb-9fb9-ae2efa4448c5.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483912-f00cab00-9462-11eb-90dd-ac8459f0d7d3.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483915-f3a03200-9462-11eb-91a5-5e6d3de32e23.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483917-f733b900-9462-11eb-95ef-11899bb63737.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483920-fb5fd680-9462-11eb-87cb-db628c9b6668.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483922-ff8bf400-9462-11eb-8b52-62ed1ef79f0f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483927-0286e480-9463-11eb-94a1-875531c8be67.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483992-69a49900-9463-11eb-8946-53627296754f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483995-6d382000-9463-11eb-974e-2861e7d21c05.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113483998-70cba700-9463-11eb-83c9-6845f3ecb26e.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484003-73c69780-9463-11eb-90b5-e466c57fcc18.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484006-775a1e80-9463-11eb-8c98-acf668737596.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484011-7a550f00-9463-11eb-896a-dc45e1224514.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484016-7de89600-9463-11eb-8c51-10de42f6f56e.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484020-80e38680-9463-11eb-9d1c-3873098548ef.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484021-83de7700-9463-11eb-8240-40adeb8de0ff.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484023-880a9480-9463-11eb-8935-f3a1ded952e0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484030-8b9e1b80-9463-11eb-9f87-36938ba50441.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113484749-319f5500-9467-11eb-8a3e-e0f4028a6922.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485914-66160f80-946d-11eb-9c70-43bd8f41d82a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485916-68786980-946d-11eb-8449-391fafe3835a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485918-6adac380-946d-11eb-95f6-6c0e122d1333.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485921-6d3d1d80-946d-11eb-9e95-9dcf26488d0a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485927-70380e00-946d-11eb-8237-4f0a39933200.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485928-7332fe80-946d-11eb-9f5e-aeaef258dc2c.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485935-78904900-946d-11eb-92b0-661dc9069b15.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485937-7af2a300-946d-11eb-9ff7-2003a8bbd11c.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485940-7ded9380-946d-11eb-82b6-4b9c8cfc3360.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485942-80e88400-946d-11eb-80a3-4de122cf8ac2.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485945-83e37480-946d-11eb-983d-0de93d2498df.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485950-86de6500-946d-11eb-975d-a70933f01026.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485954-89d95580-946d-11eb-86c9-c30fb13ca1f5.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485958-8d6cdc80-946d-11eb-98cb-f581b6a64cf9.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485962-8fcf3680-946d-11eb-969c-fc12ac10dfc2.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485964-9198fa00-946d-11eb-9b74-d634dfdda7f0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485967-9493ea80-946d-11eb-84e6-446457484ef1.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485968-978edb00-946d-11eb-990d-bef3a91f07a0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485972-99f13500-946d-11eb-8b8d-bec330bc9e94.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485975-9cec2580-946d-11eb-91fa-edcdfdbf9fde.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485978-9fe71600-946d-11eb-8c01-16eccb78fea5.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485979-a2e20680-946d-11eb-9336-d63e0d045a29.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485985-a5446080-946d-11eb-9d3d-f21e265b7e3a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485988-a83f5100-946d-11eb-91eb-734464991d8b.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485990-ac6b6e80-946d-11eb-9c6a-71cf1fdd4352.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485991-aecdc880-946d-11eb-9499-69d12469a182.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485993-b1c8b900-946d-11eb-9cba-40816e85e0a1.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485995-b55c4000-946d-11eb-93cd-fb66799e22a8.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113485997-b8efc700-946d-11eb-9cd2-1aa5a7c71120.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486037-066c3400-946e-11eb-9398-5e6627bca76a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486041-09ffbb00-946e-11eb-92fa-3aadc6484e82.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486043-0cfaab80-946e-11eb-88bb-03642912b0e7.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486050-108e3280-946e-11eb-9d6e-a767d0f142d4.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486053-12f08c80-946e-11eb-85e6-3bb196753cfa.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486054-15eb7d00-946e-11eb-8a2f-c7ad46ba73c9.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486057-184dd700-946e-11eb-9a6e-68ee65c17020.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486058-1ab03100-946e-11eb-9d19-ab555717b30b.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486061-1e43b800-946e-11eb-9d8d-9ea46d5fe9f7.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486064-213ea880-946e-11eb-8813-1ff93d248b40.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486067-24399900-946e-11eb-8795-289620ba8a55.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486068-269bf300-946e-11eb-90ae-179e8293a0d2.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486073-2a2f7a00-946e-11eb-83a2-f3f1368955fb.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486082-2dc30100-946e-11eb-9b24-0fca9624ae3d.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486085-30255b00-946e-11eb-8e02-91c603a1c0af.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486089-33204b80-946e-11eb-89ba-4e88a72cd3fe.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486093-37e4ff80-946e-11eb-992d-cb3053d4587d.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486095-3adff000-946e-11eb-9831-fea148cfeea5.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486096-3ddae080-946e-11eb-9a95-188a0512fcd0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486097-40d5d100-946e-11eb-872d-56bfb0295990.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486653-3832ca00-9471-11eb-9eff-08b54ad5a405.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486655-3a952400-9471-11eb-866f-b8697273d53b.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486660-3cf77e00-9471-11eb-843b-b097ff9643fe.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486663-3ff26e80-9471-11eb-9a9b-a52aca41a185.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486666-42ed5f00-9471-11eb-83d7-63f9f6a7525c.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486671-45e84f80-9471-11eb-9bc7-16b87ea5ca89.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486676-48e34000-9471-11eb-9236-30583f2fc264.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486681-4bde3080-9471-11eb-894f-696b5cd41162.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486685-4ed92100-9471-11eb-87c9-c8946c1db1fe.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486690-51d41180-9471-11eb-9776-ccdb47e0e35c.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486694-54cf0200-9471-11eb-8e55-249bbb6eac15.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486697-57c9f280-9471-11eb-8674-6ebfcd302cad.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486698-5ac4e300-9471-11eb-8b00-353d165827e7.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486699-5dbfd380-9471-11eb-9413-7e8da14c064e.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486701-60222d80-9471-11eb-979c-f0e610db0192.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486702-62848780-9471-11eb-9083-300607f15fe3.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486705-657f7800-9471-11eb-8590-efd62c8f4157.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486706-67e1d200-9471-11eb-9cce-4d948e295f21.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486710-6a442c00-9471-11eb-809d-9fc21872127f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486715-6d3f1c80-9471-11eb-9285-42a459cb7357.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486720-703a0d00-9471-11eb-9dbd-4219105965a2.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486722-73cd9400-9471-11eb-96b6-7897f44110f3.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486725-76c88480-9471-11eb-864a-78dd054f9931.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486729-792ade80-9471-11eb-9bd7-13cdd6cd50aa.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486730-7c25cf00-9471-11eb-9a6c-547d987ed50d.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486732-7f20bf80-9471-11eb-83f3-d0068042cd26.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486736-821bb000-9471-11eb-9c0b-1ce05fc039b0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486740-8516a080-9471-11eb-826b-8d3e083b39f8.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486741-88aa2780-9471-11eb-8dcd-ce9709040d38.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486744-8ba51800-9471-11eb-857f-cfcac47e2e56.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486748-8f389f00-9471-11eb-8890-822e0d3dc8be.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486755-919af900-9471-11eb-85a6-6a7fd366bcbe.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486760-9495e980-9471-11eb-9ab3-d471ecfca86a.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486767-9790da00-9471-11eb-96a8-474741e4b4e6.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486772-9a8bca80-9471-11eb-929f-2d4bfaaf5f48.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486779-9d86bb00-9471-11eb-8a2d-10dd13235c39.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486786-a081ab80-9471-11eb-86e8-de4e0b844f9f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486789-a37c9c00-9471-11eb-8ca5-7a1f3ac6164e.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486792-a6778c80-9471-11eb-8a98-7087491a06bb.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486795-a9727d00-9471-11eb-95eb-db62f81adcd3.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486798-ac6d6d80-9471-11eb-8c22-aef4d12e0b5f.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486800-af685e00-9471-11eb-9949-de641f7d223d.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486803-b2634e80-9471-11eb-9374-fb1a1cbb415b.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486806-b55e3f00-9471-11eb-9088-41442a708abc.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486808-b8592f80-9471-11eb-84a6-ae360c3226be.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486811-babb8980-9471-11eb-8e3f-745b3c960b26.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486813-bd1de380-9471-11eb-8561-c69d1546dffa.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113486814-bf803d80-9471-11eb-936d-092bc0042107.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113486817-c313c480-9471-11eb-9de9-f450f5c4339c.JPG"},
    {src:"https://user-images.githubusercontent.com/81041775/113487182-d7f15780-9473-11eb-8f2b-92fd682afa53.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487194-ea6b9100-9473-11eb-9a29-05de0e531979.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487197-efc8db80-9473-11eb-91fb-bfc7e3809f52.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487204-f3f4f900-9473-11eb-9661-2a1bc1fdfcb8.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487893-dd50a100-9477-11eb-8394-9be9f9cb7cff.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487900-ec375380-9477-11eb-8326-c4abac874b83.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487911-f2c5cb00-9477-11eb-928b-8aea7719f321.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487915-f9ecd900-9477-11eb-843a-13771dee0df0.jpg"},
    {src:"https://user-images.githubusercontent.com/81041775/113487917-fbb69c80-9477-11eb-907f-8ce61abc024e.jpg"}
];
const loadImg = () => {
img.map( (e)=>{
const $div = document.createElement("div"),
$img = document.createElement("img");
$div.classList.add("carousel-item");
$img.classList.add("d-block", "w-100");
$img.setAttribute("src", e.src)

$div.appendChild($img);

$fragment.appendChild($div);

})

$carousel.appendChild($fragment);
}

loadImg();
}
