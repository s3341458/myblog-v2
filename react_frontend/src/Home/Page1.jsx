import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    title: 'Server side expert',
    content: 'Experienced in server side development and architecture design',
    src: 'assets/django.svg',
    color: '#2BA977',
    shadowColor: 'rgba(43,169,119,.12)',
  },
  {
    title: 'Experienced Deployer',
    content: 'Understand how to properly deploy and scale applications',
    src: 'assets/kubernetes.svg',
    color: '#326DE6',
    shadowColor: 'rgba(50,109,230,.12)',
  },
  {
    title: 'Frontend capable',
    content: 'Capble to do frontend design and implementations',
    src: 'assets/react.svg',
    color: '#00D8FF',
    shadowColor: 'rgba(00,216,255,.12)',
  },
  {
    title: 'Unix surviver',
    content: 'Familiar with Unix liked Operating System',
      src: 'assets/archlinux.svg',
    color: '#1793D1',
    shadowColor: 'rgba(23,147,225,.12)',
  },
  {
    title: 'FP lover',
    content: 'As a haskell lover, I am familiar with functional programing techniques',
    src: 'assets/haskell.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,174,20,.12)',
  },
  {
    title: 'ML researcher',
    content: 'Graduated with a ML research background',
    src: 'assets/pytorch.svg',
    color: '#EE4C2C',
    shadowColor: 'rgba(238,76,44,.12)',
  },
  {
    title: 'Security Awareness',
    content: 'Always aware of potential security weaknesses',
    src: 'assets/kali.svg',
    color: '#000000',
    shadowColor: 'rgba(0,0,0,.12)',
  },
  {
    title: 'Love evolving',
    content: 'Always want to embrace better technologies and evolving',
    src: 'assets/clojure.svg',
    color: '#91DC47',
    shadowColor: 'rgba(145,221,71,.12)',
  },
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];

class Page1 extends React.PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }
  render() {
    const { hoverNum } = this.state;
    let children = [[], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()} >
          <div
            className="page1-box"
            onMouseEnter={() => { this.onMouseOver(i); }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1" >
        <div className="home-page-wrapper" id="page1-wrapper">
          {!this.props.isMobile && (
            <Parallax
              className="page1-bg"
              animation={{ translateY: 200, ease: 'linear', playScale: [0, 1.65] }}
              location="page1-wrapper"
            >
              Feature
            </Parallax>
          )}
          <h2>What can I <span>do</span></h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <OverPack>
            {children}
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Page1;
