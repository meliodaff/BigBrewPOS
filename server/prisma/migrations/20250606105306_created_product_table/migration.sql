-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_product_code_key" ON "product"("product_code");
