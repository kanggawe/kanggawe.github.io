import React from 'react';
import '../assets/css/TechMarquee.css';

const row1Items = [
  { name: 'Core Router Carrier-Grade', icon: 'bi-router-fill', spec: '100 Gbps Backbone', accent: 'blue' },
  { name: 'Fiber Optic FTTH', icon: 'bi-lightning-charge-fill', spec: 'Ultra Low Latency', accent: 'teal' },
  { name: 'Tier-3 Data Center', icon: 'bi-building-fill-check', spec: '99.98% SLA Uptime', accent: 'indigo' },
  { name: 'Managed Switch L3', icon: 'bi-ethernet', spec: '10 Gbps Redundant', accent: 'cyan' },
  { name: 'Next-Gen Firewall (NGFW)', icon: 'bi-shield-shaded', spec: 'Real-time Defense', accent: 'teal' },
  { name: 'Direct Peering (OpenIXP / IIX)', icon: 'bi-diagram-3-fill', spec: 'Low Latency Route', accent: 'emerald' },
  { name: 'Dedicated Server Farm', icon: 'bi-hdd-stack-fill', spec: 'Enterprise Compute', accent: 'blue' },
  { name: 'GPON / EPON OLT', icon: 'bi-cpu-fill', spec: 'High Density Fiber', accent: 'cyan' },
  { name: 'Multi-Cloud Interconnect', icon: 'bi-clouds-fill', spec: 'AWS / GCP / Azure', accent: 'indigo' },
  { name: 'Satellite V-SAT Backup', icon: 'bi-globe2', spec: 'Remote Redundancy', accent: 'teal' },
];

const row2Items = [
  { name: 'Anti-DDoS Shield', icon: 'bi-shield-fill-check', spec: '1.2 Tbps Mitigation', accent: 'emerald' },
  { name: '24/7 NOC Monitoring', icon: 'bi-speedometer2', spec: 'Realtime Alerting', accent: 'teal' },
  { name: 'Automated Cloud Backup', icon: 'bi-database-fill-check', spec: 'Disaster Recovery', accent: 'blue' },
  { name: 'Wireless Radio Link', icon: 'bi-broadcast-pin', spec: 'Point-to-Point Microwave', accent: 'cyan' },
  { name: 'Redundant Power (UPS & Genset)', icon: 'bi-battery-charging', spec: 'Zero Downtime', accent: 'emerald' },
  { name: 'Smart SD-WAN Gateway', icon: 'bi-hdd-network-fill', spec: 'Dynamic Path Routing', accent: 'indigo' },
  { name: 'Bandwidth QoS Engine', icon: 'bi-bar-chart-fill', spec: 'Traffic Optimization', accent: 'teal' },
  { name: 'Intrusion Prevention (IPS)', icon: 'bi-lock-fill', spec: 'Zero-Trust Protocol', accent: 'blue' },
  { name: 'Precision HVAC Cooling', icon: 'bi-snow', spec: 'Climate Controlled', accent: 'cyan' },
  { name: 'Enterprise DNS Anycast', icon: 'bi-hdd-fill', spec: 'Ultra Fast Resolution', accent: 'emerald' },
];

const TechMarquee = () => {
  return (
    <section className="tech-marquee-section">
      <div className="container">
        <div className="tech-marquee-header">
          <div className="tech-marquee-badge">
            <span className="tech-badge-dot"></span>
            <i className="bi bi-cpu-fill"></i>
            <span>EKOSISTEM INFRASTRUKTUR</span>
          </div>
          <h2 className="tech-marquee-title">
            Infrastruktur &amp; <span className="tech-title-gradient">Teknologi Terdepan</span>
          </h2>
          <p className="tech-marquee-subtitle">
            Didukung perangkat telekomunikasi carrier-grade, multi-backbone berkapasitas tinggi, 
            dan pemantauan NOC 24/7 untuk menjamin konektivitas tanpa henti.
          </p>
        </div>
      </div>

      <div className="tech-marquee-container">
        {/* Track Row 1: Leftward Infinite Scroll */}
        <div className="tech-marquee-track track-left">
          <div className="tech-marquee-group">
            {row1Items.map((item, index) => (
              <div className={`tech-pill-card accent-${item.accent}`} key={`r1-a-${index}`}>
                <div className="tech-pill-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="tech-pill-info">
                  <span className="tech-pill-name">{item.name}</span>
                  <span className="tech-pill-spec">
                    <span className="spec-dot"></span>
                    {item.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="tech-marquee-group" aria-hidden="true">
            {row1Items.map((item, index) => (
              <div className={`tech-pill-card accent-${item.accent}`} key={`r1-b-${index}`}>
                <div className="tech-pill-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="tech-pill-info">
                  <span className="tech-pill-name">{item.name}</span>
                  <span className="tech-pill-spec">
                    <span className="spec-dot"></span>
                    {item.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track Row 2: Rightward Infinite Scroll */}
        <div className="tech-marquee-track track-right">
          <div className="tech-marquee-group">
            {row2Items.map((item, index) => (
              <div className={`tech-pill-card accent-${item.accent}`} key={`r2-a-${index}`}>
                <div className="tech-pill-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="tech-pill-info">
                  <span className="tech-pill-name">{item.name}</span>
                  <span className="tech-pill-spec">
                    <span className="spec-dot"></span>
                    {item.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="tech-marquee-group" aria-hidden="true">
            {row2Items.map((item, index) => (
              <div className={`tech-pill-card accent-${item.accent}`} key={`r2-b-${index}`}>
                <div className="tech-pill-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="tech-pill-info">
                  <span className="tech-pill-name">{item.name}</span>
                  <span className="tech-pill-spec">
                    <span className="spec-dot"></span>
                    {item.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
