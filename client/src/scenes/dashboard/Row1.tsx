import DashboardBox from '@/components/DashboardBox.tsx';
// import { useGetKpisQuery } from '@/state/api.ts';

function Row1() {
  // const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
}

export default Row1;
