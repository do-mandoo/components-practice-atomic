import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import LodgingLists from "../../molecules/molecules-list/List20";

const PcSize = styled.main`
  width:840px;
	min-height: calc(100vh - 80px);
  background-color: #eee;
	/* .listWrap{
		padding: 0 24px;
	} */
`
const TabletSize = styled.main`
  width:1000px;
	min-height: calc(100vh - 80px);
  background-color: skyblue;
`

const MobileSize = styled.main`
  width: 665px;
	min-height: calc(100vh - 0px);
  background-color: purple;
	/* carousalBihImg */
`

const ListStyle = () => {
	const isPc = useMediaQuery({
		query: '(min-width: 1025px)', //1025 px 이상인 경우에만 적용(1127이상.)
	});
	const isTablet = useMediaQuery({
		query: `(min-width: 677px)and (max-width: 1025px)`,
	});
	const isMobile = useMediaQuery({
		query: `(max-width: 677px)`, //744px 이하인 경우에만 적용(744이하.)
	});

	return (
		<>
			{isPc && (
				<PcSize className="Listmain">
					<LodgingLists />
				</PcSize>
			)}
			{isTablet && (
				<TabletSize className="Listmain">
					<LodgingLists />
				</TabletSize>
			)}
			{isMobile && (
				<MobileSize className="Listmain">
					{/* <LodgingLists /> */}
				</MobileSize>
			)}
		</>
	);
};
export default ListStyle;