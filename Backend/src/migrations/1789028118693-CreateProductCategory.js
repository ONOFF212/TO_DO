/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class CreateProductCategory1789028118693 {
    name = 'CreateProductCategory1789028118693'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Product" ("pid" SERIAL NOT NULL, "Name" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "stock" character varying NOT NULL, "imgUrl" character varying NOT NULL, "categoryCid" integer, CONSTRAINT "UQ_ebf17a97866dc71bbeb83cf66c4" UNIQUE ("pid"), CONSTRAINT "PK_ebf17a97866dc71bbeb83cf66c4" PRIMARY KEY ("pid"))`);
        await queryRunner.query(`CREATE TABLE "category" ("cid" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_7b62d4830cacdf631dd1df270a5" UNIQUE ("cid"), CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_7b62d4830cacdf631dd1df270a5" PRIMARY KEY ("cid"))`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_6f09acba029e3b7e89aee46fe78" FOREIGN KEY ("categoryCid") REFERENCES "category"("cid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_6f09acba029e3b7e89aee46fe78"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "Product"`);
    }
}
