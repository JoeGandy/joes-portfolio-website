import React from 'react';
import * as Icons from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import RecentTracks from '../components/RecentTracks';

require('../scss/main.scss');

export const query = graphql`
  query {
    allPrismicHomepage {
      nodes {
        id
        type
        data {
          main_header {
            raw {
              text
            }
          }
          main_links {
            item_icon
            item_link {
              url
            }
            item_text {
              text
            }
          }
          tag_line {
            text
          }
        }
      }
      totalCount
    }
  }
`

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <StaticQuery
      query={query}
      render={data => (
        <div className="_main_wrapper">
          <Helmet title={'tmp'}>
            <meta charSet="utf-8" />
            <meta name="description"
              content="Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby" />
            <meta name="keywords"
              content="drupal, react, developer, web, php, derby" />
            <html lang="en" />
          </Helmet>
          <div className="_center_box">
            <div className="_avatar" />
            <h1 className="_main_title">{data.allPrismicHomepage.nodes[0].data.main_header.raw[0].text}
              <span>{data.allPrismicHomepage.nodes[0].data.tag_line.text}</span></h1>
            <ul className="_icons">
              {data.allPrismicHomepage.nodes[0].data.main_links.map(function (link, i) {
                let Tag = Icons[link.item_icon] || null;
                return <li key={i}>
                  <a href={link.item_link.url} target={'_blank'}
                    title={link.item_text.text}
                    rel={'noopener'}>
                    <Tag size={'2em'} />
                  </a>
                </li>;
              })}
            </ul>
          </div>
          <RecentTracks />
        </div>
      )}
    />
  }
}