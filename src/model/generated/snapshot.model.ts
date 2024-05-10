import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigDecimalColumn as BigDecimalColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Snapshot {
    constructor(props?: Partial<Snapshot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    blockHeight!: number

    @Index_({unique: true})
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @BigDecimalColumn_({nullable: false})
    totalSupply!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    circulation!: BigDecimal
}
