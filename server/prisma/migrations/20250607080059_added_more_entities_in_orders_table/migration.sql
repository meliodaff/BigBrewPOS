-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "drink_name" TEXT NOT NULL,
    "drink_size" TEXT NOT NULL,
    "drink_price" INTEGER NOT NULL,
    "drink_image" TEXT NOT NULL,
    "drink_category" TEXT NOT NULL,
    "drink_add_ons" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);
