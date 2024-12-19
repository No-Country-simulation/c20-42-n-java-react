CREATE TABLE doctor (
                               id bigint NOT NULL,
                               descripcion character varying(255),
                               honorarios double precision NOT NULL,
                               licencia character varying(255),
                               especialidad_id bigint,
                               persona_id bigint
);






CREATE TABLE doctor_pacientes (
                                         doctor_id bigint NOT NULL,
                                         pacientes_id bigint NOT NULL
);



CREATE TABLE especialidad (
                                     id bigint NOT NULL,
                                     nombre character varying(255),
                                     descripcion character varying(255),
                                     foto_url character varying(255)
);



CREATE TABLE historia_clinica (
                                         id bigint NOT NULL
);





CREATE TABLE paciente (
                                 id bigint NOT NULL,
                                 historia_clinica_id bigint,
                                 persona_id bigint
);



CREATE TABLE pdf_file (
                                 id bigint NOT NULL,
                                 fecha_de_subido timestamp without time zone,
                                 file bytea,
                                 file_name character varying(255)
);



CREATE TABLE persona (
                                id bigint NOT NULL,
                                nombre character varying(255),
                                apellido character varying(255),
                                dni character varying(255),
                                email character varying(255),
                                fdn date,
                                foto_url character varying(255),
                                sexo smallint,
                                telefono character varying(255)
);


CREATE TABLE registro_medico (
                                        id bigint NOT NULL,
                                        diagnostico character varying(255),
                                        expediente character varying(255),
                                        fecha date,
                                        motivo_de_la_consulta character varying(255),
                                        observaciones character varying(255),
                                        seguimiento character varying(255),
                                        tratamiento character varying(255),
                                        doctor_id bigint,
                                        historia_clinica_id bigint
);



CREATE TABLE registro_medico_sintomas (
                                                 registro_medico_id bigint NOT NULL,
                                                 sintomas character varying(255)
);


CREATE TABLE turno (
                              id bigint NOT NULL,
                              estado_turno smallint,
                              event_id character varying(255),
                              fecha_hora timestamp without time zone,
                              doctor_id bigint,
                              paciente_id bigint
);


CREATE TABLE usuario (
                                id bigint NOT NULL,
                                email character varying(255) NOT NULL,
                                entidad_id bigint,
                                rol smallint
);

COPY doctor (id, descripcion, honorarios, licencia, especialidad_id, persona_id) FROM stdin;
1	Me especializo en nutrición deportiva. Mi objetivo es ayudarte a optimizar tu rendimiento físico y alcanzar tus metas a través de una alimentación personalizada.	303	ceff59f0-d298-4ba1-adc1-46985b862d4c	1	1
2	Soy dermatóloga y me especializo en el cuidado de la piel, ayudándote a mantenerla sana y radiante.	317	5e1d9041-2ad2-48d3-8c9d-93f5c0ccd747	6	2
3	Soy especialista en ginecología deportiva. Mi enfoque es cuidar la salud integral de las mujeres activas y deportistas.	228	b68a50fe-c5ef-4c24-9f2e-2ea81ba257aa	2	3
4	Soy médico general con un enfoque integral. Mi objetivo es ayudarte a mantener una buena salud y prevenir enfermedades.	333	6157ed5c-e700-432c-a8fe-cdad2fcf5266	3	4
5	Trabajo como dermatóloga, brindando tratamientos personalizados para mejorar la salud y apariencia de tu piel.	125	cab00e62-3a4d-47fc-b69a-585def9b7b26	6	5
6	Trabajo como médica general, brindando atención primaria y personalizada para todas las etapas de la vida.	202	be5a8541-adf8-4cc6-a01e-a8357d3b7dd3	3	6
7	Como pediatra, me dedico a cuidar la salud de los más pequeños, acompañando su crecimiento con atención personalizada.	195	db9bf2ca-d64e-40d6-aa02-fd407abfbfce	5	7
8	Soy especialista en salud mental, enfocada en brindarte apoyo emocional y herramientas para mejorar tu bienestar psicológico.	251	f0d7c022-ade3-4810-a5a7-02406ad1cd0c	4	8
9	Mi especialidad es la dermatología. Te acompaño en el diagnóstico y tratamiento de diversas condiciones de la piel.	361	e0852883-faa5-4628-8d03-3155927896bd	6	9
10	Como profesional en salud mental, te acompaño en el manejo de emociones y situaciones difíciles para que logres equilibrio y paz.	362	a955241b-27f2-4889-9d1d-bbbe29494b52	4	10
11	Como médica general, me especializo en cuidar tu salud con un enfoque preventivo y tratamientos efectivos.	168	2ed7f338-c142-4352-9160-67d0cb18340b	3	11
12	Soy pediatra y trabajo para garantizar el bienestar integral de tus hijos, desde recién nacidos hasta adolescentes.	182	45ac0c55-5664-4cc3-9316-019900a669ac	5	12
13	Me especializo en pediatría, ofreciendo un cuidado cercano y profesional para cada etapa del desarrollo infantil.	286	77238651-8c53-4aae-b599-faf56772cf2e	5	13
14	Soy experta en nutrición clínica y trabajo con personas que buscan mejorar su salud y controlar enfermedades como diabetes o hipertensión. Juntos podemos lograr grandes cambios	248	70b500ac-9c22-4d02-81ec-042cb8fb9ff2	1	14
15	Mi pasión es la pediatría. Estoy aquí para brindarles a tus hijos la mejor atención médica con un enfoque humano.	414	7da916f9-cf26-408d-a501-9132ec66a387	5	15
16	Mi pasión es la medicina general. Estoy aquí para apoyarte en el cuidado de tu bienestar físico y emocional.	253	fe8713f7-11e7-4596-9216-343ba39b8645	3	16
17	Trabajo como pediatra, ayudando a familias a mantener la salud y el desarrollo adecuado de sus hijos.	300	c1698306-aaf4-4b6e-9458-d496000e1c67	5	17
18	Me dedico a la ginecología clínica, ayudando a prevenir y tratar enfermedades mediante un cuidado personalizado y cercano.	339	505798dd-c09d-4416-b579-a704e9ca2230	2	18
19	Mi enfoque está en la salud mental, ayudándote a superar retos emocionales y fortaleciendo tu resiliencia.	305	436897a0-adc3-4eac-aec4-c7138c254ece	4	19
20	Como dermatólogo, me dedico a cuidar tu piel con tratamientos efectivos y un enfoque preventivo.	191	00a3e2da-ab73-45cd-a7c6-ec71bee6fcc1	6	20
21	Me especializo en salud mental, ofreciendo terapias personalizadas para ayudarte a alcanzar una mejor calidad de vida.	254	b0c78dec-2c48-4cad-83b4-d2fcdaa324bd	4	21
22	Como pediatra, mi compromiso es acompañar a tus hijos en cada paso de su crecimiento con cuidado y dedicación.	107	e66501f0-945d-4791-a1f3-b5802b9e4c59	5	22
23	Me dedico a la medicina general, ofreciendo atención integral para resolver tus dudas y necesidades de salud.	343	347e3145-905b-4fd9-89c0-888261d36aa6	3	23
24	Mi pasión es la nutrición pediátrica. Acompaño a familias en el camino hacia hábitos alimenticios saludables para que los más pequeños crezcan fuertes y sanos.	210	f2fe771b-5d47-4a2a-9434-1716440c930f	1	24
25	Soy especialista en dermatología, enfocándome en problemas como acné, psoriasis, y salud capilar.	243	2c202b3a-70a6-41ad-aef8-b292f69ffa9a	6	25
26	Soy pediatra y mi prioridad es la salud infantil, ayudando a prevenir y tratar enfermedades comunes en niños.	102	260d3aec-8d69-4d81-b939-94701c727d6e	5	26
27	Como médica general, mi prioridad es proporcionar un cuidado cercano y accesible para toda la familia.	433	906a070c-9687-4a3a-bbd3-26d8fe4f4545	3	27
28	Trabajo en el área de salud mental, apoyándote en la gestión de estrés, ansiedad y otros desafíos emocionales.	240	92584270-8d56-4362-9a1f-402fca2440ed	4	28
29	Me dedico a la dermatología, ayudándote a resolver problemas de piel con un enfoque profesional y cercano.	227	daaf88f8-3359-4cc5-8818-f00a67fe3c1c	6	29
30	Me especializo en nutrición para mujeres, brindando acompañamiento personalizado en cada etapa de la vida, desde el embarazo hasta la menopausia.	124	64ecc2d9-81a9-4c3f-ac93-01339e67707c	1	30
31	Como dermatólogo, estoy aquí para asesorarte en el cuidado integral de tu piel, cabello y uñas.	310	2ceff5c6-a51a-47c6-a937-8f5f580a37cf	6	31
32	Soy experto en salud mental, y mi objetivo es guiarte hacia un bienestar integral, fortaleciendo tu estabilidad emocional.	259	6e2e287b-f314-4662-9915-4ab40f27a855	4	32
33	Mi enfoque en pediatría es ofrecer atención integral para cuidar el bienestar físico y emocional de los niños.	407	2bde18d3-2b30-42f1-ad0c-7e618a33e8fb	5	33
34	Como especialista en salud mental, te acompaño en el camino hacia el autoconocimiento y el manejo saludable de tus emociones.	415	75944d9e-405f-486e-bb17-f8efcb4535d1	4	34
35	Mi enfoque en medicina general es acompañarte en el mantenimiento de una vida saludable a través de un trato humano.	373	c49febdf-1c5a-4574-b27c-2b04e7818ba1	3	35
36	Soy médico general y trabajo para ofrecerte soluciones prácticas y efectivas para cuidar tu salud.	215	27bbefaf-83e7-4f41-b512-066812e9b9ce	3	36
37	Mi enfoque como dermatóloga es brindarte soluciones efectivas para que luzcas una piel sana y hermosa.	123	70d65088-5122-4be2-acd2-e5309d7aeaf0	6	37
38	Me dedico a la salud mental, ayudando a construir herramientas para afrontar problemas emocionales y mejorar tu calidad de vida.	150	59f15c39-f07f-4212-9aeb-ec6011ab82f3	4	38
39	Soy dermatólogo y trabajo contigo para tratar condiciones dermatológicas y mejorar tu calidad de vida.	302	249e13b8-e5e0-46e1-99e0-0dbcc1e1f318	6	39
40	Me dedico a la pediatría, proporcionando a tus hijos una atención médica de calidad en un ambiente cálido y seguro.	270	1f9de8fd-d03a-4e0e-b899-344284fa0e6d	5	40
41	Trabajo en ginecología infantil y juvenil, acompañando a niñas y adolescentes en cada etapa de su desarrollo con un enfoque humano y profesional.	168	06c52a69-3c53-4d2c-a6aa-54bd2e48be36	2	41
42	Como especialista en nutrición vegetariana y vegana, diseño planes que aseguran una alimentación completa, balanceada y alineada con tus valores.	358	ca9f1e35-52b3-4cc1-82cf-80c890630f08	1	42
43	Creo en un enfoque integrativo para la nutrición, combinando ciencia con bienestar emocional para ayudarte a mejorar tu relación con la comida.	359	4dcbcdbb-5eca-453b-a7c6-55643a6d1f76	1	43
44	Me especializo en dermatología clínica, ayudándote a prevenir y tratar problemas comunes y complejos de la piel.	323	8a2cad12-57bf-4c55-94c1-0eaa0b2cc6f0	6	44
45	Me dedico al control de peso y la composición corporal. Trabajo contigo para alcanzar tus objetivos de forma sostenible y adaptada a tu estilo de vida.	229	dca1e975-d20d-48ad-a0ef-0345f2fa5ee8	1	45
46	Mi especialidad es la medicina general. Estoy comprometido a brindarte un diagnóstico preciso y un tratamiento adecuado.	251	0bfbb654-fbea-4416-a88a-76e81a413082	3	46
47	Como pediatra, mi objetivo es garantizar la salud de los niños y adolescentes, ayudándolos a crecer fuertes y saludables.	136	ba57281b-5e22-4181-9ad0-c10e2de8c6c4	5	47
48	Soy pediatra y estoy aquí para apoyarte en el cuidado integral de tus hijos, desde la prevención hasta el tratamiento.	250	51bb4c2c-b308-44a5-8d92-3097ac4242d2	5	48
49	Trabajo como médico general, ayudándote a prevenir y tratar enfermedades comunes de manera efectiva.	284	dde4ecf2-873b-4361-9972-b81881705e78	3	49
50	Trabajo en pediatría, acompañando a los más pequeños con atención especializada en todas las etapas de su desarrollo.	212	2c70dff7-474d-4661-b1ec-697c59996f08	5	50
51	Soy experto en salud digestiva y trabajo con personas que enfrentan intolerancias alimentarias u otros trastornos digestivos. Juntos mejoraremos tu calidad de vida	259	27e49f89-d92c-4ce5-afa6-e7285dbbb3ce	1	51
52	Mi especialidad es la pediatría. Ofrezco cuidado integral para que tus hijos crezcan saludables y felices.	107	93401648-4ad4-4cbc-9974-fae1644b1a43	5	52
53	Trabajo en dermatología, enfocándome en tratamientos personalizados para cada tipo de piel y necesidad.	430	be077849-838b-49d1-95e3-d45488866edf	6	53
54	Como dermatólogo, me dedico a cuidar tu piel con tratamientos innovadores y una atención cercana.	129	f9b9ef2f-227b-4ce1-9688-eaa1458209c8	6	54
55	Soy dermatóloga y mi objetivo es ayudarte a mantener una piel saludable mediante prevención y tratamientos efectivos.	181	c7fa265d-596a-4771-a83e-135f21967787	6	55
56	Me especializo en dermatología estética y clínica, brindando soluciones integrales para el cuidado de tu piel.	421	a0538cd5-8e0b-4b29-8a68-ea3b732b7197	6	56
57	Me especializo en nutrición para adultos mayores, ayudando a mejorar su calidad de vida mediante planes alimenticios adecuados a sus necesidades.	237	9de13c12-ae7f-466b-8d40-d3d158ffe322	1	57
58	Como dermatólogo, mi pasión es ayudarte a resolver problemas dermatológicos para que te sientas más seguro con tu piel.	409	d10cc2e8-eec4-4759-8ec8-f89b23429058	6	58
59	Mi especialidad es la ginecología para mujeres mayores, ofreciendo cuidado integral para mejorar la calidad de vida en esta etapa.	169	76ee0f24-cafe-4848-900d-dd6a9e39dcf6	2	59
60	Como médico general, me dedico a proporcionar atención primaria integral para promover tu bienestar.	330	855898e2-f3ca-45cb-b11b-65f78e413d61	3	60
\.


--
-- TOC entry 4868 (class 0 OID 16394)
-- Dependencies: 218
-- Data for Name: doctor_pacientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY doctor_pacientes (doctor_id, pacientes_id) FROM stdin;
2	12
5	1
12	11
18	2
21	10
22	7
29	6
34	4
35	8
41	3
46	5
49	15
52	14
55	9
59	13
\.


--
-- TOC entry 4869 (class 0 OID 16397)
-- Dependencies: 219
-- Data for Name: especialidad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY especialidad (id, nombre, descripcion, foto_url) FROM stdin;
1	Nutrición	Asesoramiento sobre alimentación saludable. Planes personalizados para mejorar tu dieta y manejar condiciones relacionadas con la nutrición.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125318/nutricion_fgk8ji.png
2	Ginecología	Cuidado del sistema reproductivo femenino. Consultas sobre salud menstrual, embarazo, menopausia y enfermedades ginecológicas.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/genecologia_anenp6.png
3	Medicina General	Atención integral para adultos. Diagnóstico, tratamiento y prevención de enfermedades comunes. Consulta para recibir orientación o ser referido a un especialista.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/medicina-general_y3ha4h.png
4	Salud Mental	Apoyo en problemas emocionales y psicológicos. Diagnóstico y tratamiento de trastornos mentales con psicólogos y psiquiatras especializados.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125390/salud-mental_mlhc6k.png
5	Pediatría	Cuidado médico para niños desde el nacimiento hasta la adolescencia. Supervisión del crecimiento, desarrollo y tratamiento de enfermedades infantiles.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125321/pediatria_zxjt65.png
6	Dermatología	Tratamiento de afecciones de la piel, cabello y uñas. Diagnóstico de problemas como acné, eczema y cáncer de piel.	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/dermatologia_q0zyqs.png
\.


--
-- TOC entry 4870 (class 0 OID 16402)
-- Dependencies: 220
-- Data for Name: historia_clinica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY historia_clinica (id) FROM stdin;
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
\.


--
-- TOC entry 4871 (class 0 OID 16405)
-- Dependencies: 221
-- Data for Name: paciente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY paciente (id, historia_clinica_id, persona_id) FROM stdin;
1	1	61
2	2	62
3	3	63
4	4	64
5	5	65
6	6	66
7	7	67
8	8	68
9	9	69
10	10	70
11	11	71
12	12	72
13	13	73
14	14	74
15	15	75
\.


--
-- TOC entry 4872 (class 0 OID 16408)
-- Dependencies: 222
-- Data for Name: pdf_file; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY pdf_file (id, fecha_de_subido, file, file_name) FROM stdin;
\.


--
-- TOC entry 4873 (class 0 OID 16413)
-- Dependencies: 223
-- Data for Name: persona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY persona (id, nombre, apellido, dni, email, fdn, foto_url, sexo, telefono) FROM stdin;
1	Arturo	Baeza	04964814	arturo-baeza@gmail.com	1988-05-27	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566822/portrait-friendly-asian-doctor-man-600nw-2284832901_zuzni9.webp	0	633.365.647
2	Gloria	Alba	78783718	gloria-alba@gmail.com	1990-12-22	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567842/photo-1673865641073-4479f93a7776_nvc2ll.jpg	1	670.744.156
3	César	Aponte	80634779	césar-aponte@gmail.com	1985-09-06	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566820/download_mg5y3t.jpg	0	619659983
4	Roberto	Abeyta	85350755	roberto-abeyta@gmail.com	1991-06-22	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566810/download_nztet5.jpg	0	656684535
5	Dolores	Campos	02524529	dolores-campos@gmail.com	1996-04-29	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567840/1000_F_469276051_Cimw9lJORz68tHJed54ioTgGLufQWZ3Z_a4bfmz.jpg	1	690-368-448
6	Luisa	Quintana	81821063	luisa-quintana@gmail.com	2003-03-27	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567838/3282646_al2c5z.jpg	1	670.802.025
7	María	Benavides	54110501	maría-benavides@gmail.com	2003-03-20	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567825/pngtree-women-doctor-on-blur-hospital-background-image_15519143_n3qsv0.jpg	1	613408521
8	Anita	Feliciano	35895773	anita-feliciano@gmail.com	2002-05-23	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567819/istockphoto-1292015214-612x612_kxqjp9.jpg	1	629.838.677
9	Maricarmen	Carrion	77276142	maricarmen-carrion@gmail.com	1998-04-28	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567804/female-doctor-in-scrubs-james-whitaker_l1vdnn.jpg	1	603 402 743
10	Yolanda	Abrego	66039971	yolanda-abrego@gmail.com	2000-06-07	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567796/360_F_239344862_Ot00ghbj9KrUi3jzLR8pdlKKplFKSKrh_b2f6e0.jpg	1	658 651 894
11	Virginia	Jáquez	77157136	virginia-jáquez@gmail.com	2003-03-23	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567789/_d2d3609c-c847-11e6-9f83-7f3d2f12db63_f1viqa.jpg	1	602-364-543
12	Homero	Leiva	87504145	homero-leiva@gmail.com	1990-11-04	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566510/handsome-male-doctor-with-clipboard-standing-in-front-of-wall-GIOF12206_r9gnzr.jpg	0	665-943-212
13	Jorge		16395073	jorge-saavedra@gmail.com	2000-07-06	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566509/portrait-doctor-general-practitioner-physician-600nw-2270850483_pogmfa.webp	0	632 440 606
14	María Elena	Galarza	12836149	maría elena-galarza@gmail.com	1986-01-30	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567784/young-asian-female-doctor-grey_296537-1123_rq8ni6.avif	1	623-307-135
15	Lucia	Guajardo	33238599	lucia-guajardo@gmail.com	1984-11-02	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567773/portrait-of-smiling-female-doctor-with-stethoscope-PNEF01938_awgd5n.jpg	1	691498817
16	Rebeca	Reyes	85225705	rebeca-reyes@gmail.com	2001-12-06	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567763/young-asian-female-doctor-standing-600nw-2138546201_zyavht.webp	1	696.750.537
17	Blanca	Roybal	11074741	blanca-roybal@gmail.com	1991-03-15	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567756/360_F_637141150_wgCEsiPc8vi8W6LOke9qtl5MNModUKol_ew7lah.jpg	1	662.829.622
18	María José	Herrera	48504715	maría josé-herrera@gmail.com	1986-03-16	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567750/1000_F_282721311_yyx96CWXbXsy2XVOFAjZ6jFm8vZrZKjO_qpibmx.jpg	1	666076588
19	Lorenzo	Lozano	17841020	lorenzo-lozano@gmail.com	1993-05-27	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566499/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC_w4ykdz.jpg	0	607-428-247
20	Julio	Campos	74075531	julio-campos@gmail.com	1984-06-03	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566493/istockphoto-523086961-612x612_g4zk7d.jpg	0	673.012.579
21	Benito	Santana	82864513	benito-santana@gmail.com	1997-11-18	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566485/pcom-south-georgia-diversity-panel-discussion-black-men-in-medicine-rss_gcvux2.jpg	0	601573799
22	Rocio	Linares	16802258	rocio-linares@gmail.com	1992-03-08	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567742/960x0_r8wddy.webp	1	628 503 851
23	Ester	Castellanos	80615873	ester-castellanos@gmail.com	2003-04-05	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567732/f45c7557ce284084797f79629efbfbda_t_cxohcl.jpg	1	634-725-948
24	Salvador	Quiñónez	88287825	salvador-quiñónez@gmail.com	1995-10-13	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566469/istockphoto-1327024466-612x612_wmihdk.jpg	0	629028084
25	Mariana	Sosa	36634043	mariana-sosa@gmail.com	1985-02-18	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567727/93d3bc_1d206854256649e3be73e6749a5f686b_mv2_ury6if.webp	1	614-942-493
26	Pilar	Rosado	77420535	pilar-rosado@gmail.com	1994-04-19	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567719/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO_bjvm1p.jpg	1	679 785 105
27	Norma	Balderas	57672869	norma-balderas@gmail.com	1992-02-10	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567713/7d3d2055-bc33-4a62-a099-3173fc10800f_ykpm4v.avif	1	648.455.110
28	Pedro	Rivas	55209178	pedro-rivas@gmail.com	1993-08-30	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566467/istockphoto-1161336374-612x612_qmc5ep.jpg	0	607 879 397
29	Horacio	Rincón	35572155	horacio-rincón@gmail.com	1987-12-29	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566459/360_F_143819453_Eai3IbcXhhGGoCWY5lso1ijI9nH387yC_omhpkr.jpg	0	656-882-262
30	Luz	Rosas	66378481	luz-rosas@gmail.com	1994-12-20	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567710/2a0e8cb609405d9ca87bc81154b9c443_xkr5mk.jpg	1	674.773.705
31	Luis Miguel	Colunga	62710870	luis miguel-colunga@gmail.com	1986-11-24	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566454/smiling-doctor-in-a-white-lab-coat-with-a-stethoscope-posing-confidently-indoors-free-photo_aswrht.jpg	0	623 333 363
32	Benjamín	Villa	02302607	benjamín-villa@gmail.com	1985-07-23	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566446/retrato-hombre-joven-doctor-hombre-hansome_171337-5068_pwhjb7.avif	0	667.899.660
33	Manuel	Morales	68022226	manuel-morales@gmail.com	2003-02-03	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734566429/f4c9ef33d04a22050038e9e53eeb7d85_wt1edd.jpg	0	699 574 679
34	Lorena	Meraz	67830487	lorena-meraz@gmail.com	1994-10-31	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567701/vista-frontal-doctora-estetoscopio_23-2149856262_fiqpnk.avif	1	603-955-846
35	María Soledad	Ortiz	41717987	maría soledad-ortiz@gmail.com	2000-11-16	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567695/image-middle-aged-asian-female-600nw-2154469299_pabwjv.webp	1	680 362 340
36	Leonor	Reyes	49784972	leonor-reyes@gmail.com	1995-12-02	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567685/file-20191203-66986-im7o5_q4maau.avif	1	636 326 137
37	María Soledad	Gracia	55305578	maría soledad-gracia@gmail.com	1992-12-19	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567675/c9b5b62799692878b33d77fa2eb1fc38_mhtp2i.jpg	1	626870072
38	Germán	Pedraza	70865740	germán-pedraza@gmail.com	1993-01-27	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565483/rey-berry-portrait_uxcmhv.jpg	0	637.752.301
39	Agustín	Urrutia	20726916	agustín-urrutia@gmail.com	2002-06-21	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565482/1_md-ls21938_650_upv4cq.jpg	0	662 652 400
40	Luz	Corona	67127348	luz-corona@gmail.com	1989-03-05	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567669/istockphoto-1425798958-612x612_vglqkm.jpg	1	607 557 004
41	Leonor	de Jesús	13881221	leonor-de jesús@gmail.com	1994-06-09	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567665/d6e7f5a491d24f278b1a882471b6ddde_ops1yv.webp	1	650 180 310
42	Catalina	Bermúdez	56088101	catalina-bermúdez@gmail.com	2000-09-04	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567660/360_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv_dy85de.jpg	1	630 540 215
43	Lola	Valenzuela	13262801	lola-valenzuela@gmail.com	1996-02-07	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567654/portrait-asian-female-doctor-wearing-600nw-2502070973_xizyls.webp	1	689611511
44	Carmen	Godínez	13665881	carmen-godínez@gmail.com	1994-06-25	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567640/smiling-young-african-american-curly-600nw-2319779015_xhuxla.webp	1	629 865 811
45	Julio	Carrasquillo	52064430	julio-carrasquillo@gmail.com	2000-02-07	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565480/confident-doctor-over-white-background-portrait-male-standing-vertical-shot-39366393_g2w9xe.jpg	0	625-651-621
46	Alfredo	Lozada	84126762	alfredo-lozada@gmail.com	1993-02-02	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565480/doctor-in-white-coat-blog_rvwck3.jpg	0	623119171
47	Daniel	Salinas	80536940	daniel-salinas@gmail.com	2001-02-18	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565430/1000_F_269039461_lJIRepB3b98f0HQ8eQEN2W603j3oNt7z_yzif6i.jpg	0	638 442 970
48	Manuel	de Jesús	23533658	manuel-de jesús@gmail.com	2002-06-04	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565429/young-latin-american-doctor-man-holding-credit-card-color-red-online-shop-concept_297446-476_vqoczj.jpg	0	691-135-108
49	Sancho	Badillo	76364564	sancho-badillo@gmail.com	1984-09-29	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734565428/young-latin-doctor-man-holding-book-isolated_1187-347246_zwv9my.jpg	0	604350735
50	Carlota	Colunga	12503654	carlota-colunga@gmail.com	1992-06-01	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567635/premium_photo-1664475450083-5c9eef17a191_eajbym.jpg	1	634-956-278
51	José	Madrigal	27164729	josé-madrigal@gmail.com	2003-11-13	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729617129/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg_lrthtf.jpg	0	680-722-752
52	María del Carmen	Mondragón	85842650	maría del carmen-mondragón@gmail.com	1998-02-13	https://res.cloudinary.com/dpvs5m9an/image/upload/v1734567631/istockphoto-638647058-612x612_tg9cxv.jpg	1	647 117 655
53	Patricia	Tamez	65807769	patricia-tamez@gmail.com	1994-12-31	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729617043/1000_F_432829549_cLx7xj3Ojf6RaH17lGkDoGDQ7kLB8chb_dnmcjk.jpg	1	696.796.546
54	Emilio	Zapata	81642124	emilio-zapata@gmail.com	1996-08-22	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616848/confident-successful-mature-doctor-at-hospital_mbyoqc.jpg	0	646258676
55	Berta	Ceja	40553155	berta-ceja@gmail.com	1994-03-22	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616950/portrait-asian-female-doctor-with-crossed-arms_296537-2682_viehad.jpg	1	621.420.699
56	Leonor	Ramírez	59400796	leonor-ramírez@gmail.com	1997-03-09	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Dentista-Doctor_qcf9oz.png	1	619937924
57	Margarita	Ochoa	45568147	margarita-ochoa@gmail.com	1999-04-13	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Psicologa_kfotnu.png	1	650 760 022
58	Salvador	Serna	26451999	salvador-serna@gmail.com	2000-11-09	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616315/Temple-Student-Sean-Brown-900-600_vgenn1.jpg	0	678-493-165
59	Antonia	Laboy	84376502	antonia-laboy@gmail.com	2002-06-17	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Doctora_2_nvjtqr.png	1	652.791.528
60	José	Lebrón	58327806	josé-lebrón@gmail.com	1985-10-01	https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Doctor_3_h7j3am.png	0	655.144.349
61	Enrique	Marroquín	19036077	enrique-marroquín@gmail.com	1973-03-25	\N	\N	605.917.306
62	Cristina	Berríos	26243314	cristina-berríos@gmail.com	1974-12-01	\N	\N	690262738
63	Samuel	Tafoya	87298104	samuel-tafoya@gmail.com	1999-04-19	\N	\N	647 482 396
64	Octavio	Narváez	16501268	octavio-narváez@gmail.com	1973-10-05	\N	\N	631 066 074
65	Mario	Escobedo	36124785	mario-escobedo@gmail.com	1999-08-13	\N	\N	621 342 501
66	Marcos	Almonte	13016032	marcos-almonte@gmail.com	1973-01-30	\N	\N	638-670-884
67	Rubén	Contreras	67045415	rubén-contreras@gmail.com	1983-03-07	\N	\N	615500795
68	Joaquín	Palomo	80635881	joaquín-palomo@gmail.com	1962-07-14	\N	\N	640.791.951
69	Mercedes	Valle	80668779	mercedes-valle@gmail.com	1965-05-24	\N	\N	681.091.543
70	Ester	Orosco	16590540	ester-orosco@gmail.com	1974-10-30	\N	\N	698.549.375
71	Cristobal	Barajas	80008433	cristobal-barajas@gmail.com	1992-01-04	\N	\N	692-201-413
72	Pedro	Gallardo	57227163	pedro-gallardo@gmail.com	1965-08-21	\N	\N	629 738 257
73	Luis Miguel	Villalobos	59893020	luis miguel-villalobos@gmail.com	1978-05-30	\N	\N	690.597.684
74	Santiago	Zavala	52186145	santiago-zavala@gmail.com	1979-01-02	\N	\N	635.879.203
75	Mario	Alvarado	01416050	mario-alvarado@gmail.com	1978-01-03	\N	\N	664 533 933
\.


--
-- TOC entry 4874 (class 0 OID 16418)
-- Dependencies: 224
-- Data for Name: registro_medico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY registro_medico (id, diagnostico, expediente, fecha, motivo_de_la_consulta, observaciones, seguimiento, tratamiento, doctor_id, historia_clinica_id) FROM stdin;
\.


--
-- TOC entry 4875 (class 0 OID 16423)
-- Dependencies: 225
-- Data for Name: registro_medico_sintomas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY registro_medico_sintomas (registro_medico_id, sintomas) FROM stdin;
\.


--
-- TOC entry 4876 (class 0 OID 16426)
-- Dependencies: 226
-- Data for Name: turno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY turno (id, estado_turno, event_id, fecha_hora, doctor_id, paciente_id) FROM stdin;
\.


--
-- TOC entry 4877 (class 0 OID 16429)
-- Dependencies: 227
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY usuario (id, email, entidad_id, rol) FROM stdin;
1	paciente@gmail.com	1	1
2	doctor@gmail.com	1	0
\.


--
-- TOC entry 4686 (class 2606 OID 16438)
-- Name: doctor_pacientes doctor_pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor_pacientes
    ADD CONSTRAINT doctor_pacientes_pkey PRIMARY KEY (doctor_id, pacientes_id);


--
-- TOC entry 4683 (class 2606 OID 16435)
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);


--
-- TOC entry 4688 (class 2606 OID 16440)
-- Name: especialidad especialidad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY especialidad
    ADD CONSTRAINT especialidad_pkey PRIMARY KEY (id);


--
-- TOC entry 4690 (class 2606 OID 16442)
-- Name: historia_clinica historia_clinica_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY historia_clinica
    ADD CONSTRAINT historia_clinica_pkey PRIMARY KEY (id);


--
-- TOC entry 4694 (class 2606 OID 16446)
-- Name: paciente paciente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY paciente
    ADD CONSTRAINT paciente_pkey PRIMARY KEY (id);


--
-- TOC entry 4696 (class 2606 OID 16448)
-- Name: pdf_file pdf_file_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY pdf_file
    ADD CONSTRAINT pdf_file_pkey PRIMARY KEY (id);


--
-- TOC entry 4698 (class 2606 OID 16450)
-- Name: persona persona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id);


--
-- TOC entry 4702 (class 2606 OID 16454)
-- Name: registro_medico registro_medico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY registro_medico
    ADD CONSTRAINT registro_medico_pkey PRIMARY KEY (id);


--
-- TOC entry 4707 (class 2606 OID 16459)
-- Name: turno turno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY turno
    ADD CONSTRAINT turno_pkey PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 16462)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 4684 (class 1259 OID 16436)
-- Name: FKf5moqigjhjwotv8cympr84eb9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKf5moqigjhjwotv8cympr84eb9" ON doctor_pacientes USING btree (pacientes_id);


--
-- TOC entry 4703 (class 1259 OID 16455)
-- Name: FKfs98b86vdj3udgsuhpnhtqf9v; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKfs98b86vdj3udgsuhpnhtqf9v" ON registro_medico_sintomas USING btree (registro_medico_id);


--
-- TOC entry 4699 (class 1259 OID 16452)
-- Name: FKm8b3gne9s0il91jcnrmsokagu; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKm8b3gne9s0il91jcnrmsokagu" ON registro_medico USING btree (historia_clinica_id);


--
-- TOC entry 4704 (class 1259 OID 16457)
-- Name: FKqhwvsf9bqsfmlhd0nurynvwsd; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKqhwvsf9bqsfmlhd0nurynvwsd" ON turno USING btree (paciente_id);


--
-- TOC entry 4700 (class 1259 OID 16451)
-- Name: FKs0d8m6b2obm9st25boibw6511; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKs0d8m6b2obm9st25boibw6511" ON registro_medico USING btree (doctor_id);


--
-- TOC entry 4680 (class 1259 OID 16433)
-- Name: FKtbuk69oxc1nipf6vddfw8hmi; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKtbuk69oxc1nipf6vddfw8hmi" ON doctor USING btree (especialidad_id);


--
-- TOC entry 4705 (class 1259 OID 16456)
-- Name: FKxnt1jfw8kj4fn4ru08obfrw5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FKxnt1jfw8kj4fn4ru08obfrw5" ON turno USING btree (doctor_id);


--
-- TOC entry 4708 (class 1259 OID 16460)
-- Name: UK5171l57faosmj8myawaucatdw; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "UK5171l57faosmj8myawaucatdw" ON usuario USING btree (email);


--
-- TOC entry 4691 (class 1259 OID 16443)
-- Name: UKbwm4lvyr8gyii5tqadt5nlpgr; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "UKbwm4lvyr8gyii5tqadt5nlpgr" ON paciente USING btree (historia_clinica_id);


--
-- TOC entry 4681 (class 1259 OID 16432)
-- Name: UKfy62aypmtwbn6ey7vlvorq2n1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "UKfy62aypmtwbn6ey7vlvorq2n1" ON doctor USING btree (persona_id);


--
-- TOC entry 4692 (class 1259 OID 16444)
-- Name: UKjo25rjbw6y4t4iuudi6odxji4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "UKjo25rjbw6y4t4iuudi6odxji4" ON paciente USING btree (persona_id);


--
-- TOC entry 4715 (class 2606 OID 16483)
-- Name: paciente FK2h1o2ma092r3o2qof7172x13u; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY paciente
    ADD CONSTRAINT "FK2h1o2ma092r3o2qof7172x13u" FOREIGN KEY (historia_clinica_id) REFERENCES historia_clinica(id);


--
-- TOC entry 4716 (class 2606 OID 16488)
-- Name: paciente FK99ic29d6kmxf2mpsrrj060ju5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY paciente
    ADD CONSTRAINT "FK99ic29d6kmxf2mpsrrj060ju5" FOREIGN KEY (persona_id) REFERENCES persona(id);


--
-- TOC entry 4711 (class 2606 OID 16463)
-- Name: doctor FK9klcvfm4mxr5yy729wu1ywpwr; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor
    ADD CONSTRAINT "FK9klcvfm4mxr5yy729wu1ywpwr" FOREIGN KEY (persona_id) REFERENCES persona(id);


--
-- TOC entry 4713 (class 2606 OID 16473)
-- Name: doctor_pacientes FKf5moqigjhjwotv8cympr84eb9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor_pacientes
    ADD CONSTRAINT "FKf5moqigjhjwotv8cympr84eb9" FOREIGN KEY (pacientes_id) REFERENCES paciente(id);


--
-- TOC entry 4719 (class 2606 OID 16503)
-- Name: registro_medico_sintomas FKfs98b86vdj3udgsuhpnhtqf9v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY registro_medico_sintomas
    ADD CONSTRAINT "FKfs98b86vdj3udgsuhpnhtqf9v" FOREIGN KEY (registro_medico_id) REFERENCES registro_medico(id);


--
-- TOC entry 4714 (class 2606 OID 16478)
-- Name: doctor_pacientes FKh3s6n9b4bvw2y1nws40qsvscy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor_pacientes
    ADD CONSTRAINT "FKh3s6n9b4bvw2y1nws40qsvscy" FOREIGN KEY (doctor_id) REFERENCES doctor(id);


--
-- TOC entry 4717 (class 2606 OID 16493)
-- Name: registro_medico FKm8b3gne9s0il91jcnrmsokagu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY registro_medico
    ADD CONSTRAINT "FKm8b3gne9s0il91jcnrmsokagu" FOREIGN KEY (historia_clinica_id) REFERENCES historia_clinica(id);


--
-- TOC entry 4720 (class 2606 OID 16508)
-- Name: turno FKqhwvsf9bqsfmlhd0nurynvwsd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY turno
    ADD CONSTRAINT "FKqhwvsf9bqsfmlhd0nurynvwsd" FOREIGN KEY (paciente_id) REFERENCES paciente(id);


--
-- TOC entry 4718 (class 2606 OID 16498)
-- Name: registro_medico FKs0d8m6b2obm9st25boibw6511; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY registro_medico
    ADD CONSTRAINT "FKs0d8m6b2obm9st25boibw6511" FOREIGN KEY (doctor_id) REFERENCES doctor(id);


--
-- TOC entry 4712 (class 2606 OID 16468)
-- Name: doctor FKtbuk69oxc1nipf6vddfw8hmi; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY doctor
    ADD CONSTRAINT "FKtbuk69oxc1nipf6vddfw8hmi" FOREIGN KEY (especialidad_id) REFERENCES especialidad(id);


--
-- TOC entry 4721 (class 2606 OID 16513)
-- Name: turno FKxnt1jfw8kj4fn4ru08obfrw5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY turno
    ADD CONSTRAINT "FKxnt1jfw8kj4fn4ru08obfrw5" FOREIGN KEY (doctor_id) REFERENCES doctor(id);


-- Completed on 2024-12-18 23:35:11

--
-- PostgreSQL database dump complete
--

