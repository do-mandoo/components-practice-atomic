import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import LodgingLists from "../molecules/List20";

const PcSize = styled.main`
  width:840px;
	min-height: calc(100vh - 80px);
  background-color: yellowgreen;
	.listWrap{
		padding: 0 24px;
	}
`
const TabletSize = styled.main`
  width:840px;
	min-height: calc(100vh - 80px);
  background-color: skyblue;
`

const MobileSize = styled.main`
  min-width: 547px;
	min-height: calc(100vh - 0px);
  background-color: purple;
`

const ListStyle = () => {
	const isPc = useMediaQuery({
		query: '(min-width: 1128px)', //1128px 이상인 경우에만 적용
	});
	const isTablet = useMediaQuery({
		query: `(min-width: 745px)and (max-width: 1127px)`,
	});
	const isMobile = useMediaQuery({
		query: `(max-width: 744px)`, //744px 이하인 경우에만 적용
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
					<LodgingLists />
				</MobileSize>
			)}
		</>
	);
};
export default ListStyle;