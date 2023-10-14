docker compose rm -f
docker compose down
docker compose up --build

psql -h db -U root -d auth-core
select * from user_account;