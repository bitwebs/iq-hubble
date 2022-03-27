import { useTranslation } from "react-i18next"
/* FIXME(iq.js): Import from iq.js */
import { BondStatus } from "@web4/iq.proto/cosmos/staking/v1beta1/staking"
import { bondStatusFromJSON } from "@web4/iq.proto/cosmos/staking/v1beta1/staking"
import { Tag } from "components/display"

export const ValidatorStatus = ({ status }: { status: BondStatus }) => {
  const { t } = useTranslation()

  const color =
    bondStatusFromJSON(BondStatus[status]) === BondStatus.BOND_STATUS_BONDED
      ? "success"
      : "warning"

  const label =
    bondStatusFromJSON(BondStatus[status]) === BondStatus.BOND_STATUS_BONDED
      ? t("Active")
      : t("Inactive")

  return <Tag color={color}>{t(label)}</Tag>
}

export const ValidatorJailed = () => {
  const { t } = useTranslation()
  return (
    <Tag color="danger" small>
      {t("Jailed")}
    </Tag>
  )
}
