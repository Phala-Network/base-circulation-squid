module.exports = class Data1715342121771 {
    name = 'Data1715342121771'

    async up(db) {
        await db.query(`CREATE TABLE "circulation" ("id" character varying NOT NULL, "block_height" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "total_supply" numeric NOT NULL, "circulation" numeric NOT NULL, CONSTRAINT "PK_6e548c45bfff22b5cd3db45c49e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "snapshot" ("id" character varying NOT NULL, "block_height" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "total_supply" numeric NOT NULL, "circulation" numeric NOT NULL, CONSTRAINT "PK_47b29c1a6055220b1ebdafdf7b5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bc48af886ba34532db70f1f4f0" ON "snapshot" ("block_height") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_816f4c3efd3c3a05e597861df4" ON "snapshot" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "circulation"`)
        await db.query(`DROP TABLE "snapshot"`)
        await db.query(`DROP INDEX "public"."IDX_bc48af886ba34532db70f1f4f0"`)
        await db.query(`DROP INDEX "public"."IDX_816f4c3efd3c3a05e597861df4"`)
    }
}
