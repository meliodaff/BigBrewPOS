-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "drink_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);
