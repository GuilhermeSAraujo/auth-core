CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE public."user_account" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
