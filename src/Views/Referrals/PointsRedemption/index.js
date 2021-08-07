import Breadcrumb from 'components/Breadcrumb';

export default function PointsRedemption() {
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Referral'
        parentLink='/referrals'
        childLink='/referrals/redemption'
        childText='Points Redemption'
      />
    </div>
  );
}
