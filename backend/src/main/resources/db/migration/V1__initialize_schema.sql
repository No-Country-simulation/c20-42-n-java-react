create table doctor
(
    honorarios      float(53) not null,
    especialidad_id bigint,
    id              bigint    not null auto_increment,
    persona_id      bigint,
    descripcion     varchar(512),
    licencia        varchar(255),
    primary key (id)
) engine = InnoDB;
create table doctor_pacientes
(
    doctor_id    bigint not null,
    pacientes_id bigint not null,
    primary key (doctor_id, pacientes_id)
) engine = InnoDB;
create table especialidad
(
    id          bigint not null auto_increment,
    descripcion varchar(255),
    foto_url    varchar(255),
    nombre      varchar(255),
    primary key (id)
) engine = InnoDB;
create table historia_clinica
(
    id bigint not null auto_increment,
    primary key (id)
) engine = InnoDB;
create table paciente
(
    historia_clinica_id bigint,
    id                  bigint not null auto_increment,
    persona_id          bigint,
    primary key (id)
) engine = InnoDB;
create table pdf_file
(
    fecha_de_subido datetime(6),
    id              bigint not null auto_increment,
    file_name       varchar(255),
    file            varbinary(255),
    primary key (id)
) engine = InnoDB;
create table persona
(
    fdn      date,
    sexo     tinyint,
    id       bigint not null auto_increment,
    apellido varchar(255),
    dni      varchar(255),
    email    varchar(255),
    foto_url varchar(255),
    nombre   varchar(255),
    telefono varchar(255),
    primary key (id)
) engine = InnoDB;
create table registro_medico
(
    fecha                 date,
    doctor_id             bigint,
    historia_clinica_id   bigint,
    id                    bigint not null auto_increment,
    diagnostico           varchar(255),
    expediente            varchar(255),
    motivo_de_la_consulta varchar(255),
    observaciones         varchar(255),
    seguimiento           varchar(255),
    tratamiento           varchar(255),
    primary key (id)
) engine = InnoDB;
create table registro_medico_sintomas
(
    registro_medico_id bigint not null,
    sintomas           varchar(255)
) engine = InnoDB;
create table turno
(
    estado_turno tinyint,
    doctor_id    bigint,
    fecha_hora   datetime(6),
    id           bigint not null auto_increment,
    paciente_id  bigint,
    event_id     varchar(255),
    primary key (id)
) engine = InnoDB;
create table usuario
(
    rol        tinyint,
    entidad_id bigint,
    id         bigint       not null auto_increment,
    email      varchar(255) not null,
    primary key (id)
) engine = InnoDB;
alter table doctor
    add constraint UKfy62aypmtwbn6ey7vlvorq2n1 unique (persona_id);
alter table paciente
    add constraint UKbwm4lvyr8gyii5tqadt5nlpgr unique (historia_clinica_id);
alter table paciente
    add constraint UKjo25rjbw6y4t4iuudi6odxji4 unique (persona_id);
alter table usuario
    add constraint UK5171l57faosmj8myawaucatdw unique (email);
alter table doctor
    add constraint FKtbuk69oxc1nipf6vddfw8hmi foreign key (especialidad_id) references especialidad (id);
alter table doctor
    add constraint FK9klcvfm4mxr5yy729wu1ywpwr foreign key (persona_id) references persona (id);
alter table doctor_pacientes
    add constraint FKf5moqigjhjwotv8cympr84eb9 foreign key (pacientes_id) references paciente (id);
alter table doctor_pacientes
    add constraint FKh3s6n9b4bvw2y1nws40qsvscy foreign key (doctor_id) references doctor (id);
alter table paciente
    add constraint FK2h1o2ma092r3o2qof7172x13u foreign key (historia_clinica_id) references historia_clinica (id);
alter table paciente
    add constraint FK99ic29d6kmxf2mpsrrj060ju5 foreign key (persona_id) references persona (id);
alter table registro_medico
    add constraint FKs0d8m6b2obm9st25boibw6511 foreign key (doctor_id) references doctor (id);
alter table registro_medico
    add constraint FKm8b3gne9s0il91jcnrmsokagu foreign key (historia_clinica_id) references historia_clinica (id);
alter table registro_medico_sintomas
    add constraint FKfs98b86vdj3udgsuhpnhtqf9v foreign key (registro_medico_id) references registro_medico (id);
alter table turno
    add constraint FKxnt1jfw8kj4fn4ru08obfrw5 foreign key (doctor_id) references doctor (id);
alter table turno
    add constraint FKqhwvsf9bqsfmlhd0nurynvwsd foreign key (paciente_id) references paciente (id);
