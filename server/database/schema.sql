create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(20) not null unique,
  hashed_password varchar(100) not null
);
