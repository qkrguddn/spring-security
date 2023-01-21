insert into user (username, password, nickname, activated) values ("admin", "$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi", "admin", 1);
insert into user (username, password, nickname, activated) values ("user1", '$2a$10$UISuIj1RjFnPTloE9wfWwOnULfMkx9hkXpNOAPxJrHY5bzO6KSvtG', 'user1', 1);

insert into authority (authority_name) values ('ROLE_USER');
insert into authority (authority_name) values ('ROLE_ADMIN');

insert into user_authority (user_id, authority_name) values (1, 'ROLE_USER');
insert into user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');
insert into user_authority (user_id, authority_name) values (2, 'ROLE_USER');