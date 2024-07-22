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

create table music (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL DEFAULT 'unknown',
  year YEAR,
  genre JSON
/*   video VARCHAR(255),
  length INT UNSIGNED,
  cover VARCHAR(255) */
);

create table playlist_music (
  playlist_id int unsigned not null,
  music_id int unsigned not null,
  CONSTRAINT fk_playlist FOREIGN KEY (playlist_id) REFERENCES playlist(id) ON DELETE CASCADE,
  CONSTRAINT fk_music FOREIGN KEY (music_id) REFERENCES music(id) ON DELETE CASCADE
);