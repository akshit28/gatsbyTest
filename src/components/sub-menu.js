import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allSidebarItemsJson {
          edges {
            node {
              label
              link
            }
          }
        }
      }
    `}
    render={data => (
      <side-menu>
        <div class="side-menu-wrapper">
          <a
            routerlink="/client/lobby"
            href="https://www.jungleerummy.com/client/lobby"
          >
            <div id="play-now-gif" />
          </a>
          <div class="menu-item">
            <ul>
              <li>
                <a
                  class="menu_header"
                  id="how-to-play-rummy"
                  href="https://www.jungleerummy.com/how-to-play-rummy"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> How To Play
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu">
                  <li>
                    <a
                      id="how-to-play-rummy/rummy-video-tutorial"
                      href="https://www.jungleerummy.com/how-to-play-rummy/rummy-video-tutorial"
                      class=""
                    >
                      <span class="round-arrow" /> Tutorial
                    </a>
                  </li>
                  <li>
                    <a
                      id="how-to-play-rummy/24x7-games"
                      href="https://www.jungleerummy.com/how-to-play-rummy/24x7-games"
                    >
                      <span class="round-arrow" /> 24x7 Games
                    </a>
                  </li>
                  <li>
                    <a
                      id="how-to-play-rummy/rummy-rules"
                      href="https://www.jungleerummy.com/how-to-play-rummy/rummy-rules"
                    >
                      <span class="round-arrow" /> Rummy Rules
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  class="menu_header"
                  id="rummy-faq"
                  href="https://www.jungleerummy.com/rummy-faq"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> Rummy FAQ
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu">
                  <li>
                    <a
                      id="rummy-faq/points-rummy-faq"
                      href="https://www.jungleerummy.com/rummy-faq/points-rummy-faq"
                    >
                      <span class="round-arrow" /> Point Rummy - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/10-cards-rummy-faq"
                      href="https://www.jungleerummy.com/rummy-faq/10-cards-rummy-faq"
                    >
                      <span class="round-arrow" /> 10 Card Rummy - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/deals-rummy-faq"
                      href="https://www.jungleerummy.com/rummy-faq/deals-rummy-faq"
                    >
                      <span class="round-arrow" /> Deals Rummy - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/pool-rummy-faq"
                      href="https://www.jungleerummy.com/rummy-faq/pool-rummy-faq"
                    >
                      <span class="round-arrow" /> Pool Rummy - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/promotions-faq"
                      href="https://www.jungleerummy.com/rummy-faq/promotions-faq"
                    >
                      <span class="round-arrow" /> Promotions FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/tournament-faq"
                      href="https://www.jungleerummy.com/rummy-faq/tournament-faq"
                    >
                      <span class="round-arrow" /> Tournament - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/technicalspecifications-faq"
                      href="https://www.jungleerummy.com/rummy-faq/technicalspecifications-faq"
                    >
                      <span class="round-arrow" /> Technicalspecifications -
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/switchtables-faq"
                      href="https://www.jungleerummy.com/rummy-faq/switchtables-faq"
                    >
                      <span class="round-arrow" /> 2D and 3D Tables - FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/21-card-rummy-faq"
                      href="https://www.jungleerummy.com/rummy-faq/21-card-rummy-faq"
                    >
                      <span class="round-arrow" /> 21 Card Rummy-FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-faq/bonus-wallet"
                      href="https://www.jungleerummy.com/rummy-faq/bonus-wallet"
                    >
                      <span class="round-arrow" /> Account FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      id="promotions/junglee-rummy-loyalty-program"
                      href="https://www.jungleerummy.com/promotions/junglee-rummy-loyalty-program"
                    >
                      <span class="round-arrow" /> Loyalty Program
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="menu_header"
                  id="depositandwithdrawal"
                  href="https://www.jungleerummy.com/depositandwithdrawal"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> Deposit and Withdrawal
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu" />
              </li>
              <li>
                <a
                  class="menu_header"
                  id="types-of-rummy/types-of-rummy"
                  href="https://www.jungleerummy.com/types-of-rummy/types-of-rummy"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> Types Of Rummy
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu">
                  <li>
                    <a
                      id="types-of-rummy/13-cards-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/13-cards-rummy"
                    >
                      <span class="round-arrow" /> 13 Card rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/indian-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/indian-rummy"
                    >
                      <span class="round-arrow" /> Indian Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/shanghai-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/shanghai-rummy"
                    >
                      <span class="round-arrow" /> Shanghai Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/rummy500"
                      href="https://www.jungleerummy.com/types-of-rummy/rummy500"
                    >
                      <span class="round-arrow" /> Rummy 500 Online
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/21-cards-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/21-cards-rummy"
                    >
                      <span class="round-arrow" /> 21 Card Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/dummy-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/dummy-rummy"
                    >
                      <span class="round-arrow" /> Dummy Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/tonk-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/tonk-rummy"
                    >
                      <span class="round-arrow" /> Tonk Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/kalookirummy"
                      href="https://www.jungleerummy.com/types-of-rummy/kalookirummy"
                    >
                      <span class="round-arrow" /> Kalooki Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/gin-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/gin-rummy"
                    >
                      <span class="round-arrow" /> Gin Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/contract-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/contract-rummy"
                    >
                      <span class="round-arrow" /> Contract Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/three-thirteen-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/three-thirteen-rummy"
                    >
                      <span class="round-arrow" /> Three thirteen Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/robbersrummy"
                      href="https://www.jungleerummy.com/types-of-rummy/robbersrummy"
                    >
                      <span class="round-arrow" /> Robber's Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/bingrummy"
                      href="https://www.jungleerummy.com/types-of-rummy/bingrummy"
                    >
                      <span class="round-arrow" /> Bing rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/zioncheck-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/zioncheck-rummy"
                    >
                      <span class="round-arrow" /> Zioncheck Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/canasta-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/canasta-rummy"
                    >
                      <span class="round-arrow" /> Canasta Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/rummikub"
                      href="https://www.jungleerummy.com/types-of-rummy/rummikub"
                    >
                      <span class="round-arrow" /> Rummikub
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/tong-its-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/tong-its-rummy"
                    >
                      <span class="round-arrow" /> Tong-its Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/panguinguerummy"
                      href="https://www.jungleerummy.com/types-of-rummy/panguinguerummy"
                    >
                      <span class="round-arrow" /> Panguingue Rummy Online
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/carioca-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/carioca-rummy"
                    >
                      <span class="round-arrow" /> Carioca Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/rumino"
                      href="https://www.jungleerummy.com/types-of-rummy/rumino"
                    >
                      <span class="round-arrow" /> Rumino
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/penang-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/penang-rummy"
                    >
                      <span class="round-arrow" /> Penang Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/rummy-variations-for-kids"
                      href="https://www.jungleerummy.com/types-of-rummy/rummy-variations-for-kids"
                    >
                      <span class="round-arrow" /> Rummy Variations For Kids
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/10-cards-rummy-rules"
                      href="https://www.jungleerummy.com/types-of-rummy/10-cards-rummy-rules"
                    >
                      <span class="round-arrow" /> 10 Cards Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/buraco-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/buraco-rummy"
                    >
                      <span class="round-arrow" /> Buraco Rummy
                    </a>
                  </li>
                  <li>
                    <a
                      id="types-of-rummy/tri-rummy"
                      href="https://www.jungleerummy.com/types-of-rummy/tri-rummy"
                    >
                      <span class="round-arrow" /> Tri Card Game
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="menu_header"
                  id="rummy-strategies"
                  href="https://www.jungleerummy.com/rummy-strategies"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> Rummy Strategies
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu">
                  <li>
                    <a
                      id="rummy-strategies/rummy-tips-and-tricks-to-win"
                      href="https://www.jungleerummy.com/rummy-strategies/rummy-tips-and-tricks-to-win"
                    >
                      <span class="round-arrow" /> Rummy Tips and Tricks
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/starting-hand-analysis"
                      href="https://www.jungleerummy.com/rummy-strategies/starting-hand-analysis"
                    >
                      <span class="round-arrow" /> Starting hand analysis
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/rummy-strategies-calculating-odds"
                      href="https://www.jungleerummy.com/rummy-strategies/rummy-strategies-calculating-odds"
                    >
                      <span class="round-arrow" /> Calculating odds
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/rummy-strategies-videos"
                      href="https://www.jungleerummy.com/rummy-strategies/rummy-strategies-videos"
                    >
                      <span class="round-arrow" /> Strategies Video
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/pick-unwanted-cards"
                      href="https://www.jungleerummy.com/rummy-strategies/pick-unwanted-cards"
                    >
                      <span class="round-arrow" /> Pick unwanted cards
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/manage-your-bankroll"
                      href="https://www.jungleerummy.com/rummy-strategies/manage-your-bankroll"
                    >
                      <span class="round-arrow" /> Manage your bankrolls
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/discardssection"
                      href="https://www.jungleerummy.com/rummy-strategies/discardssection"
                    >
                      <span class="round-arrow" /> Using discard section
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/play-rummy-with-high-cards"
                      href="https://www.jungleerummy.com/rummy-strategies/play-rummy-with-high-cards"
                    >
                      <span class="round-arrow" /> Rummy with High cards
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/play-rummy-with-joker"
                      href="https://www.jungleerummy.com/rummy-strategies/play-rummy-with-joker"
                    >
                      <span class="round-arrow" /> Rummy with Jokers
                    </a>
                  </li>
                  <li>
                    <a
                      id="rummy-strategies/high-stakes-game-strategies"
                      href="https://www.jungleerummy.com/rummy-strategies/high-stakes-game-strategies"
                    >
                      <span class="round-arrow" /> Playing High Stakes Games
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link
                  to={data.allSidebarItemsJson.edges[0].node.link}
                  className="menu_header"
                  partiallyActive={true}
                  activeClassName="active"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" />{" "}
                  {data.allSidebarItemsJson.edges[0].node.label}
                  <span class="top-arrow" />
                </Link>
                <ul class="sub-menu open">
                  <li>
                    <Link
                      to={data.allSidebarItemsJson.edges[1].node.link}
                      activeClassName="selected"
                    >
                      <span class="round-arrow" />{" "}
                      {data.allSidebarItemsJson.edges[1].node.label}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={data.allSidebarItemsJson.edges[2].node.link}
                      activeClassName="selected"
                    >
                      <span class="round-arrow" />{" "}
                      {data.allSidebarItemsJson.edges[2].node.label}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="menu_header"
                  id="card-game"
                  href="https://www.jungleerummy.com/card-game"
                >
                  <span class="white-arrow" />
                  <span class="black-arrow" /> Card Game
                  <span class="top-arrow" />
                </a>
                <ul class="sub-menu">
                  <li>
                    <a
                      id="card-game/strategy-games-online"
                      href="https://www.jungleerummy.com/card-game/strategy-games-online"
                    >
                      <span class="round-arrow" /> Strategy Games Online
                    </a>
                  </li>
                  <li>
                    <a
                      id="card-game/multiplayer-card-games"
                      href="https://www.jungleerummy.com/card-game/multiplayer-card-games"
                    >
                      <span class="round-arrow" /> Multiplayer Card Games
                    </a>
                  </li>
                  <li>
                    <a
                      id="card-game/browser-game-online"
                      href="https://www.jungleerummy.com/card-game/browser-game-online"
                    >
                      <span class="round-arrow" /> Browser Game Online
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </side-menu>
    )}
  />
)
