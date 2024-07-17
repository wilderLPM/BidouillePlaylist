create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(20) not null unique,
  hashed_password varchar(100) not null
);

create table playlist (
  id INT UNSIGNED primary key AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  user_id INT unsigned NOT NULL,
  CONSTRAINT fk_user_playlist FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
); 