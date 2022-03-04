import Section from "../../ui/section";
import Container from "../../ui/container";
import Row from "../../ui/row";
import ExchangeItem from "../exchange-item";
import PairLink from "../pair-link";
import { getSrc } from "../../../functions/utils/vanilla-utils";
import SmartButton from "../../smart-button";

const DesktopExchangesBar = ({ exchanges }) => (
  <Section className="w-screen bg-blue-650 py-1 z-90 text-white top-0 @pn fixed @ht h-40px @ow overflow-visible">
    <Container>
      <Row className="@pg px-2">
        <div className="flex flex-row flex-wrap items-center justify-center py-1 w-full">
          <div className="flex flex-row items-center justify-center mt-2px w-full">
            <span className="font-family-rubik-medium leading-20px mr-2 text-12px uppercase whitespace-nowrap text-center tracking-wide">
              Trade ZEFU tokens on:
            </span>
            <div className="flex justify-center gap-3">
              {exchanges?.length
                ? exchanges.map((item, index) => (
                    <SmartButton
                      key={index}
                      tooltipContainerClasses="@zi z-40 @bdc bg-transparent @it border-none @bxsw shadow-none top-8 @pg pb-4 @wh w-auto @mnw min-w-32 @dy flex @fxd flex-col gap-1"
                      tooltipItems={() =>
                        item?.pairs?.length
                          ? item.pairs.map((pair, index) => (
                              <PairLink
                                key={index}
                                linkClasses={``}
                                linkTitle={pair.linkTitle}
                                linkTo={pair.linkTo}
                                icon={getSrc(pair.icon)}
                              />
                            ))
                          : null
                      }
                    >
                      <ExchangeItem
                        title={item?.title || null}
                        iconClasses={``}
                        icon={item.icon}
                      />
                    </SmartButton>
                  ))
                : null}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </Section>
);

export default DesktopExchangesBar;
