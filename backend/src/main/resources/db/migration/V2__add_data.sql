START TRANSACTION;

INSERT INTO `especialidad` (`id`, `nombre`, `descripcion`, `foto_url`)
    VALUES
       (1, 'Nutrición', 'Asesoramiento sobre alimentación saludable. Planes personalizados para mejorar tu dieta y manejar condiciones relacionadas con la nutrición.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125318/nutricion_fgk8ji.png'),
       (2, 'Ginecología', 'Cuidado del sistema reproductivo femenino. Consultas sobre salud menstrual, embarazo, menopausia y enfermedades ginecológicas.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/genecologia_anenp6.png'),
       (3, 'Medicina General', 'Atención integral para adultos. Diagnóstico, tratamiento y prevención de enfermedades comunes. Consulta para recibir orientación o ser referido a un especialista.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/medicina-general_y3ha4h.png'),
       (4, 'Salud Mental', 'Apoyo en problemas emocionales y psicológicos. Diagnóstico y tratamiento de trastornos mentales con psicólogos y psiquiatras especializados.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125390/salud-mental_mlhc6k.png'),
       (5, 'Pediatría', 'Cuidado médico para niños desde el nacimiento hasta la adolescencia. Supervisión del crecimiento, desarrollo y tratamiento de enfermedades infantiles.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125321/pediatria_zxjt65.png'),
       (6, 'Dermatología', 'Tratamiento de afecciones de la piel, cabello y uñas. Diagnóstico de problemas como acné, eczema y cáncer de piel.', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729125317/dermatologia_q0zyqs.png');

INSERT INTO `persona` (`id`, `dni`, `email`, `sexo`, `nombre`, `apellido`, `telefono`, `foto_url`, `fdn`)
VALUES
    (1, '28648945', 'julio césar-alejandro@gmail.com', 0, 'Julio César', 'Alejandro', '619797810', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Doctor_3_h7j3am.png', '1990-01-15'),
    (2, '23821328', 'josé eduardo-venegas@gmail.com', 0, 'José Eduardo', 'Venegas', '656-883-119', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615023/Doctor_1_iilipl.png', '1985-03-22'),
    (3, '75558247', 'maría luisa-jaimes@gmail.com', 1, 'María Luisa', 'Jaimes', '627-001-382', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Psicologa_kfotnu.png', '1992-07-30'),
    (4, '98102116', 'timoteo-granados@gmail.com', 0, 'Timoteo', 'Granados', '614.783.055', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616315/Temple-Student-Sean-Brown-900-600_vgenn1.jpg', '1980-11-05'),
    (5, '60816615', 'catalina-barela@gmail.com', 1, 'Catalina', 'Barela', '655 035 071', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615024/Doctora_2_nvjtqr.png', '1995-04-17'),
    (6, '05152307', 'rosa-padrón@gmail.com', 1, 'Rosa', 'Padrón', '660185959', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729615022/Doctor_2_qxc35i.png', '1988-02-12'),
    (7, '05560989', 'ramiro-barrios@gmail.com', 0, 'Ramiro', 'Barrios', '620-061-762', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616848/confident-successful-mature-doctor-at-hospital_mbyoqc.jpg', '1975-09-25'),
    (8, '77218324', 'adriana-salgado@gmail.com', 1, 'Adriana', 'Salgado', '645 734 865', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729616950/portrait-asian-female-doctor-with-crossed-arms_296537-2682_viehad.jpg', '1991-06-18'),
    (9, '21880192', 'laura-navarrete@gmail.com', 1, 'Laura', 'Navarrete', '642 348 852', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729617043/1000_F_432829549_cLx7xj3Ojf6RaH17lGkDoGDQ7kLB8chb_dnmcjk.jpg', '1994-08-11'),
    (10, '02455082', 'agustín-figueroa@gmail.com', 0, 'Agustín', 'Figueroa', '662-300-160', 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729617129/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg_lrthtf.jpg', '1989-12-01'),
    (11, '50029426', 'óscar-muñoz@gmail.com', 0, 'Óscar', 'Muñoz', '659-547-253', NULL, '1983-03-15'),
    (12, '51360954', 'marco antonio-tamayo@gmail.com', 0, 'Marco Antonio', 'Tamayo', '658-803-838', NULL, '1990-07-20'),
    (13, '38220695', 'federico-negrón@gmail.com', 0, 'Federico', 'Negrón', '684 384 393', NULL, '1984-10-10'),
    (14, '05555447', 'arturo-cardenas@gmail.com', 0, 'Arturo', 'Cardenas', '633-938-338', NULL, '1992-05-05'),
    (15, '02161261', 'mariana-valle@gmail.com', 1, 'Mariana', 'Valle', '681 930 901', NULL, '1991-01-30'),
    (16, '28698934', 'lourdes-villagómez@gmail.com', 1, 'Lourdes', 'Villagómez', '678-519-028', NULL, '1986-11-22'),
    (17, '16808746', 'maría del carmen-carranza@gmail.com', 1, 'María del Carmen', 'Carranza', '641-127-924', NULL, '1978-09-16'),
    (18, '34167632', 'dolores-guevara@gmail.com', 1, 'Dolores', 'Guevara', '671102914', NULL, '1985-02-08'),
    (19, '23484026', 'olivia-acuña@gmail.com', 1, 'Olivia', 'Acuña', '691176131', NULL, '1993-04-12'),
    (20, '42080410', 'mónica-hinojosa@gmail.com', 1, 'Mónica', 'Hinojosa', '615-478-905', NULL, '1990-08-09'),
    (21, '69378525', 'miguel-cadena@gmail.com', 0, 'Miguel', 'Cadena', '659-050-397', NULL, '1977-03-03'),
    (22, '52642284', 'julio-ruelas@gmail.com', 0, 'Julio', 'Ruelas', '659666424', NULL, '1982-06-21'),
    (23, '23001519', 'micaela-loera@gmail.com', 1, 'Micaela', 'Loera', '660-447-545', NULL, '1995-07-14'),
    (24, '61025426', 'tomás-páez@gmail.com', 0, 'Tomás', 'Páez', '635 890 276', NULL, '1988-10-30'),
    (25, '14747944', 'jerónimo-olivera@gmail.com', 0, 'Jerónimo', 'Olivera', '651.761.181', NULL, '1981-12-12'),
    (26, '76608917', 'roberto-lara@gmail.com', 0, 'Roberto', 'Lara', '614-642-416', NULL, '1980-08-23'),
    (27, '73420873', 'marisol-enríquez@gmail.com', 1, 'Marisol', 'Enríquez', '692-839-490', NULL, '1996-05-30'),
    (28, '53080663', 'germán-guevara@gmail.com', 0, 'Germán', 'Guevara', '647-367-885', NULL, '1991-02-22'),
    (29, '40392004', 'gloria-abeyta@gmail.com', 1, 'Gloria', 'Abeyta', '628.071.185', NULL, '1984-09-10'),
    (30, '29232373', 'manuela-salgado@gmail.com', 1, 'Manuela', 'Salgado', '654 792 335', NULL, '1993-11-15'),
    (31, '12861502', 'sara-gamez@gmail.com', 1, 'Sara', 'Gamez', '610.174.295', NULL, '1990-01-01'),
    (32, '56927447', 'alfredo-delafuente@gmail.com', 0, 'Alfredo', 'Delafuente', '632.903.109', NULL, '1987-07-28'),
    (33, '85164731', 'julio-uribe@gmail.com', 0, 'Julio', 'Uribe', '690-330-773', NULL, '1985-03-17'),
    (34, '58525083', 'sonia-aguilera@gmail.com', 1, 'Sonia', 'Aguilera', '668-428-284', NULL, '1992-03-12'),
    (35, '68034370', 'margarita-valentín@gmail.com', 1, 'Margarita', 'Valentín', '601.199.601', NULL, '1994-05-25'),
    (36, '39342864', 'josé eduardo-hernádez@gmail.com', 0, 'José Eduardo', 'Hernádez', '624.796.808', NULL, '1986-09-30'),
    (37, '73092566', 'salvador-gonzales@gmail.com', 0, 'Salvador', 'Gonzales', '678 356 978', NULL, '1989-01-21'),
    (38, '16166911', 'sara-delarosa@gmail.com', 1, 'Sara', 'Delarosa', '641 013 727', NULL, '1990-06-07'),
    (39, '21424261', 'cecilia-briones@gmail.com', 1, 'Cecilia', 'Briones', '605327107', NULL, '1995-04-05'),
    (40, '34806085', 'cristian-rentería@gmail.com', 0, 'Cristian', 'Rentería', '686-179-892', NULL, '1992-02-28');




INSERT INTO `doctor` (`id`, `honorarios`, `licencia`, `especialidad_id`, `persona_id`, `descripcion`)
VALUES
  (1, 287591, '3eaf7213-fc67-45b8-9433-3ae69c62936f', 5, 1, 'Es un pediatra con un título de la Universidad de Lima. Tiene una gran experiencia en el tratamiento de niños, enfocándose en su crecimiento y desarrollo saludable. Su especialidad incluye la atención de enfermedades infantiles comunes y la promoción de la salud en la infancia.'),
  (2, 267950, '150096ed-fabf-477a-be8d-9b0fe63b8a02', 2, 2, 'Es un ginecólogo graduado de la Universidad de Barcelona. Con más de 10 años de experiencia, se especializa en el cuidado integral de la salud femenina, desde la adolescencia hasta la menopausia, incluyendo el seguimiento de embarazos y partos.'),
  (3, 409403, '2aea7e14-0397-4227-9f37-91dbadd5e280', 3, 3, 'Es un médica general con un título de la Universidad Nacional. Cuenta con más de 15 años de experiencia en la atención primaria de salud. Se especializa en la prevención de enfermedades y en la atención integral de los pacientes, promoviendo estilos de vida saludables.'),
  (4, 72592, 'b528ae75-2eb4-4d05-be45-101529b70f24', 4, 4, 'Es un psicólogo con un título de la Universidad de Edimburgo. Se especializa en terapia cognitivo-conductual y tiene una amplia experiencia en el tratamiento de trastornos de ansiedad y depresión. Trabaja de manera cercana con sus pacientes para ayudarles a superar sus dificultades emocionales.'),
  (5, 85871, 'fa2fb1db-a0c5-410c-9f77-eb3ae9365a4c', 4, 5, 'Es una psicóloga con formación en la Universidad de Buenos Aires. Tiene un enfoque centrado en la terapia familiar y de pareja, ayudando a sus pacientes a desarrollar herramientas para mejorar sus relaciones interpersonales y el manejo del estrés.'),
  (6, 129516, '3ee5d8f1-f74a-4902-ad78-d3fa145b372d', 6, 6, 'Es una dermatóloga formada en la Universidad de Santiago. Con más de 7 años de experiencia, se especializa en el diagnóstico y tratamiento de enfermedades de la piel, ofreciendo un enfoque integral que abarca desde el acné hasta el cáncer de piel.'),
  (7, 150244, 'f15753b1-8cea-4035-931a-ab6ceb96473e', 3, 7, 'Es un médico general graduado de la Universidad de Chile. Tiene un enfoque integral en la atención al paciente, con más de 10 años de experiencia en la atención primaria, priorizando la educación en salud y la prevención.'),
  (8, 60466, '8f7fa440-53f3-47ff-a9ef-47c39359233e', 3, 8, 'Es una médica con una sólida formación en medicina interna. Graduada de la Universidad de la Habana, tiene más de 9 años de experiencia en el tratamiento de enfermedades crónicas y una fuerte dedicación a la salud familiar.'),
  (9, 225789, 'c1acc211-7d7e-4e90-8d60-8463e9470f15', 5, 9, 'Es una pediatra con formación en la Universidad de Toronto. Su práctica se centra en el cuidado preventivo y el manejo de enfermedades infantiles, asegurando un seguimiento cercano del desarrollo de sus pacientes más jóvenes.'),
  (10, 441003, 'a1475cc6-a4d7-4b68-8d56-fde55e8fbdb2', 5, 10, 'Es un médico pediatra especializado en el cuidado integral de la infancia. Graduado de la Universidad de Rosario, cuenta con una amplia experiencia en la atención a niños y adolescentes, fomentando un desarrollo saludable y el bienestar emocional.');



INSERT INTO `historia_clinica` (`id`)
    VALUES
      (1),
      (2),
      (3),
      (4),
      (5),
      (6),
      (7),
      (8),
      (9),
      (10),
      (11),
      (12),
      (13),
      (14),
      (15),
      (16),
      (17),
      (18),
      (19),
      (20),
      (21),
      (22),
      (23),
      (24),
      (25),
      (26),
      (27),
      (28),
      (29),
      (30);


INSERT INTO `paciente` (`id`, `historia_clinica_id`, `persona_id`)
    VALUES
       (1, 1, 11),
       (2, 2, 12),
       (3, 3, 13),
       (4, 4, 14),
       (5, 5, 15),
       (6, 6, 16),
       (7, 7, 17),
       (8, 8, 18),
       (9, 9, 19),
       (10, 10, 20),
       (11, 11, 21),
       (12, 12, 22),
       (13, 13, 23),
       (14, 14, 24),
       (15, 15, 25),
       (16, 16, 26),
       (17, 17, 27),
       (18, 18, 28),
       (19, 19, 29),
       (20, 20, 30),
       (21, 21, 31),
       (22, 22, 32),
       (23, 23, 33),
       (24, 24, 34),
       (25, 25, 35),
       (26, 26, 36),
       (27, 27, 37),
       (28, 28, 38),
       (29, 29, 39),
       (30, 30, 40);


INSERT INTO `doctor_pacientes` (`doctor_id`, `pacientes_id`)
    VALUES
         (1, 14),
         (2, 1),
         (2, 5),
         (2, 7),
         (2, 17),
         (2, 26),
         (3, 6),
         (3, 20),
         (4, 3),
         (4, 10),
         (5, 11),
         (5, 19),
         (5, 29),
         (6, 8),
         (6, 15),
         (6, 22),
         (6, 28),
         (7, 4),
         (7, 9),
         (7, 16),
         (7, 21),
         (7, 27),
         (8, 2),
         (8, 13),
         (8, 18),
         (8, 30),
         (9, 12),
         (9, 23),
         (9, 24),
         (9, 25);

INSERT INTO `usuario` (`id`, `email`, `entidad_id`, `rol`)
    VALUES
       (1, 'paciente@gmail.com', 1, 1),
       (2, 'doctor@gmail.com', 1, 0);

COMMIT;