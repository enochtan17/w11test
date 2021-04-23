  psql -U postgres -c "CREATE USER app_academy WITH PASSWORD 'password'"
  psql -U postgres -c "ALTER USER app_academy CREATEDB"
  psql -U postgres -c "CREATE DATABASE express_assessment_test"
  psql -U postgres -c "CREATE DATABASE express_assessment_development"
  npx sequelize-cli db:migrate --env test
  npx sequelize-cli db:seed:all --env test
  npx sequelize-cli db:migrate --env development
  npx sequelize-cli db:seed:all --env development
