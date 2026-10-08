import { useState, useEffect } from 'react';
import '../assets/css/CustomerPortal.css';

const CustomerPortal = () => {
  // Session & Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // overview, billing, wifi, speedtest, tickets
  const [authMode, setAuthMode] = useState('login'); // login, quickBill, quickTicket

  // Real IP and Network Detection
  const [realNetwork, setRealNetwork] = useState({
    ip: '103.139.127.241',
    isp: 'PT. MITRACOM SOLUSI TEKNOLOGI',
    city: 'Indramayu / Losarang',
    region: 'Jawa Barat',
    country: 'Indonesia',
    asn: 'AS149964',
    browser: '',
    loading: true
  });

  // Form Inputs for Login
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Quick Bill Lookup State
  const [quickBillId, setQuickBillId] = useState('');
  const [quickBillResult, setQuickBillResult] = useState(null);

  // Quick Ticket Lookup State
  const [quickTicketId, setQuickTicketId] = useState('');
  const [quickTicketResult, setQuickTicketResult] = useState(null);

  // Customer Profile State (Integrated with Real Detected IP)
  const [profile, setProfile] = useState({
    name: 'Budi Pratama Santoso',
    customerId: 'ESA-8829-102',
    package: 'Home Fiber Ultra 100 Mbps',
    price: 385000,
    status: 'Aktif',
    address: 'Jl. Boulevard Cyber No. 42, BSD City, Tangerang Selatan 15345',
    phone: '0812-9876-5432',
    email: 'budi.santoso@gmail.com',
    ontModel: 'Huawei HG8245H5 Dual-Band GPON',
    opticalPower: '-19.4 dBm (Prima)',
    uptime: '18 Hari, 7 Jam, 22 Menit',
    wifiSsid24: 'ESANET_Home_Budi',
    wifiSsid5: 'ESANET_Home_Budi_5G',
    wifiPassword: 'WifiSuperCepat2026!'
  });

  // Billing State
  const [billingList, setBillingList] = useState([
    {
      id: 'ESA-INV-202609-082',
      period: 'September 2026',
      dueDate: '20 September 2026',
      amount: 385000,
      status: 'Belum Bayar',
      paymentDate: '-'
    },
    {
      id: 'ESA-INV-202608-077',
      period: 'Agustus 2026',
      dueDate: '20 Agustus 2026',
      amount: 385000,
      status: 'Lunas',
      paymentDate: '18 Agustus 2026 (BCA Virtual Account)'
    },
    {
      id: 'ESA-INV-202607-063',
      period: 'Juli 2026',
      dueDate: '20 Juli 2026',
      amount: 385000,
      status: 'Lunas',
      paymentDate: '19 Juli 2026 (QRIS)'
    }
  ]);

  // Payment Modal State
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bca_va');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Router Action / Reboot Simulation
  const [isRebooting, setIsRebooting] = useState(false);
  const [rebootTimer, setRebootTimer] = useState(0);

  // WiFi Settings Form
  const [wifiForm, setWifiForm] = useState({
    ssid24: 'ESANET_Home_Budi',
    ssid5: 'ESANET_Home_Budi_5G',
    password: 'WifiSuperCepat2026!'
  });
  const [showWifiSuccess, setShowWifiSuccess] = useState(false);

  // Trouble Tickets State
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-20260814-04',
      date: '14 Agustus 2026',
      category: 'Permintaan IP Publik Statis',
      subject: 'Konfirmasi alokasi IP statis untuk CCTV online',
      status: 'Selesai',
      badgeClass: 'badge-resolved',
      lastUpdate: '14 Agustus 2026 14:30 WIB oleh Tim NOC'
    },
    {
      id: 'TKT-20260620-11',
      date: '20 Juni 2026',
      category: 'Optimalisasi Jaringan',
      subject: 'Relokasi kabel drop wire fiber optik teras depan',
      status: 'Selesai',
      badgeClass: 'badge-resolved',
      lastUpdate: '21 Juni 2026 11:15 WIB oleh Teknisi Lapangan'
    }
  ]);

  const [newTicket, setNewTicket] = useState({
    category: 'Koneksi Lambat / Fluktuatif',
    subject: '',
    description: '',
    phone: '0812-9876-5432'
  });
  const [ticketSuccess, setTicketSuccess] = useState(false);

  // 1. DETECT REAL IP & REAL NETWORK INFO ON MOUNT
  useEffect(() => {
    const fetchRealNetworkInfo = async () => {
      const ua = navigator.userAgent;
      let browserName = 'Browser Web';
      if (ua.includes('Chrome')) browserName = 'Chrome / Edge';
      else if (ua.includes('Firefox')) browserName = 'Firefox';
      else if (ua.includes('Safari')) browserName = 'Safari';

      try {
        const res = await fetch('https://ipwho.is/');
        const data = await res.json();
        if (data && data.success) {
          setRealNetwork({
            ip: data.ip,
            isp: data.connection?.isp || data.connection?.org || 'ESANET Telecom Infrastructure',
            city: data.city || 'Jakarta',
            region: data.region || 'Jawa Barat',
            country: data.country || 'Indonesia',
            asn: data.connection?.asn ? `AS${data.connection.asn}` : 'AS149964',
            browser: browserName,
            loading: false
          });
          return;
        }
      } catch (err) {
        console.warn('ipwho.is error, trying fallback', err);
      }

      try {
        const res2 = await fetch('https://api.ipify.org?format=json');
        const data2 = await res2.json();
        if (data2 && data2.ip) {
          setRealNetwork((prev) => ({
            ...prev,
            ip: data2.ip,
            browser: browserName,
            loading: false
          }));
          return;
        }
      } catch (err2) {
        console.warn('ipify fallback error', err2);
      }

      setRealNetwork((prev) => ({ ...prev, browser: browserName, loading: false }));
    };

    fetchRealNetworkInfo();
  }, []);

  // SEO Page Title
  useEffect(() => {
    document.title = 'Portal Pelanggan - ESANET Self-Care';
    window.scrollTo(0, 0);
  }, [isLoggedIn, activeTab]);

  // Toast helper
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Handle Login Submit
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginId || !loginPassword) {
      setLoginError('Silakan masukkan ID Pelanggan / Email dan Kata Sandi Anda.');
      return;
    }
    setLoginError('');
    setIsLoggedIn(true);
    triggerToast(`Selamat datang di Portal Pelanggan ESANET, ${profile.name}!`);
  };

  // Demo Login Quick Button
  const handleDemoLogin = () => {
    setIsLoggedIn(true);
    setLoginId('ESA-8829-102');
    setLoginPassword('password123');
    setLoginError('');
    triggerToast('Anda masuk ke sesi Portal Pelanggan ESANET.');
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('overview');
    triggerToast('Anda telah keluar dari Portal Pelanggan.');
  };

  // Handle Quick Bill Lookup
  const handleQuickBill = (e) => {
    e.preventDefault();
    if (!quickBillId.trim()) return;

    setQuickBillResult({
      customerId: quickBillId.toUpperCase(),
      name: 'Budi Pratama Santoso',
      packageName: 'Home Fiber Ultra 100 Mbps',
      invoiceNumber: 'ESA-INV-202609-082',
      period: 'September 2026',
      dueDate: '20 September 2026',
      amount: 385000,
      adminFee: 2500,
      total: 387500,
      status: 'Belum Lunas'
    });
  };

  // Handle Quick Ticket Status
  const handleQuickTicket = (e) => {
    e.preventDefault();
    if (!quickTicketId.trim()) return;

    setQuickTicketResult({
      ticketId: quickTicketId.toUpperCase(),
      createdAt: '09 September 2026, 14:15 WIB',
      category: 'Pemeriksaan Sinyal Optik & ONT',
      status: 'Dalam Penanganan Teknisi',
      progress: 75,
      technician: 'Ahmad Fauzi (ID Tek: TK-841)',
      notes: 'Teknisi sedang melakukan pengecekan redaman kabel drop di ODP terdekat.'
    });
  };

  // Handle ONT Remote Reboot
  const handleRebootRouter = () => {
    setIsRebooting(true);
    setRebootTimer(15);
    triggerToast('Perintah reboot jarak jauh terkirim ke ONT Huawei Anda.');

    const interval = setInterval(() => {
      setRebootTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRebooting(false);
          triggerToast('Reboot selesai! Modem ONT Anda kembali online dengan sinyal prima.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle WiFi Form Save
  const handleSaveWifi = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      wifiSsid24: wifiForm.ssid24,
      wifiSsid5: wifiForm.ssid5,
      wifiPassword: wifiForm.password
    });
    setShowWifiSuccess(true);
    triggerToast('Konfigurasi SSID & Kata Sandi WiFi berhasil diperbarui di router Anda.');
    setTimeout(() => setShowWifiSuccess(false), 4000);
  };

  // Handle Bill Payment Simulation
  const handleConfirmPayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setBillingList(
        billingList.map((bill) =>
          bill.id === 'ESA-INV-202609-082'
            ? { ...bill, status: 'Lunas', paymentDate: `Hari ini, ${new Date().toLocaleDateString('id-ID')}` }
            : bill
        )
      );
      setShowPayModal(false);
      setPaymentSuccess(false);
      triggerToast('Pembayaran berhasil diverifikasi! Terima kasih telah menggunakan ESANET.');
    }, 1800);
  };

  // Handle New Ticket Submit
  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTicket.subject || !newTicket.description) {
      alert('Mohon isi subjek dan deskripsi keluhan Anda.');
      return;
    }

    const randomId = `TKT-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(10 + Math.random() * 90)}`;
    const createdTicket = {
      id: randomId,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: newTicket.category,
      subject: newTicket.subject,
      status: 'Sedang Diproses',
      badgeClass: 'badge-progress',
      lastUpdate: 'Baru saja dibuat oleh Pelanggan'
    };

    setTickets([createdTicket, ...tickets]);
    setNewTicket({
      category: 'Koneksi Lambat / Fluktuatif',
      subject: '',
      description: '',
      phone: profile.phone
    });
    setTicketSuccess(true);
    triggerToast(`Tiket ${randomId} berhasil dibuat! Tim NOC segera menghubungi Anda.`);
    setTimeout(() => setTicketSuccess(false), 5000);
  };

  return (
    <div className="portal-page">
      {/* Flash Toast Notification */}
      {toastMessage && (
        <div className="portal-toast">
          <i className="bi bi-info-circle-fill"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ============================================================
          VIEW 1: UNAUTHENTICATED (LOGIN / QUICK BILL / QUICK TICKET)
          ============================================================ */}
      {!isLoggedIn ? (
        <div className="portal-auth-container">
          {/* Hero Banner Header */}
          <div className="portal-auth-hero">
            <div className="container">
              <div className="portal-auth-badge">
                <i className="bi bi-shield-lock-fill"></i>
                <span>ESANET Self-Care Hub</span>
              </div>
              <h1 className="portal-auth-title">
                Portal Pelanggan <span className="text-gradient">ESANET</span>
              </h1>
              <p className="portal-auth-subtitle">
                Akses mudah kelola akun, cek rincian tagihan, kontrol router WiFi rumah, dan uji kecepatan jaringan real-time.
              </p>

              {/* Real IP Live Detection Badge on Login */}
              <div className="login-real-ip-bar">
                <span className="ip-indicator-dot"></span>
                <span>IP Publik Anda: <strong>{realNetwork.loading ? 'Mendeteksi...' : realNetwork.ip}</strong></span>
                <span className="ip-bar-sep">•</span>
                <span>ISP: <strong>{realNetwork.loading ? 'Mendeteksi...' : realNetwork.isp}</strong></span>
                <span className="ip-bar-sep">•</span>
                <span>Lokasi: <strong>{realNetwork.city}, ID</strong></span>
              </div>
            </div>
          </div>

          <div className="container portal-auth-main">
            <div className="portal-auth-grid">
              {/* Left Column: Interactive Auth Box */}
              <div className="portal-card-wrapper">
                {/* Navigation Pills */}
                <div className="portal-tab-header">
                  <button
                    className={`portal-tab-btn ${authMode === 'login' ? 'active' : ''}`}
                    onClick={() => setAuthMode('login')}
                  >
                    <i className="bi bi-person-circle"></i>
                    <span>Masuk Akun</span>
                  </button>
                  <button
                    className={`portal-tab-btn ${authMode === 'quickBill' ? 'active' : ''}`}
                    onClick={() => setAuthMode('quickBill')}
                  >
                    <i className="bi bi-receipt"></i>
                    <span>Cek Tagihan Cepat</span>
                  </button>
                  <button
                    className={`portal-tab-btn ${authMode === 'quickTicket' ? 'active' : ''}`}
                    onClick={() => setAuthMode('quickTicket')}
                  >
                    <i className="bi bi-ticket-perforated"></i>
                    <span>Status Tiket</span>
                  </button>
                </div>

                <div className="portal-card-body">
                  {/* TAB 1: LOGIN FORM */}
                  {authMode === 'login' && (
                    <div className="auth-tab-content">
                      <div className="auth-header-mini">
                        <h2>Masuk ke Akun Pelanggan</h2>
                        <p>Gunakan ID Pelanggan atau Email terdaftar saat pemasangan.</p>
                      </div>

                      {loginError && (
                        <div className="portal-alert-danger">
                          <i className="bi bi-exclamation-triangle-fill"></i>
                          <span>{loginError}</span>
                        </div>
                      )}

                      <form onSubmit={handleLogin} className="portal-form">
                        <div className="form-group">
                          <label htmlFor="loginId">ID Pelanggan / Email</label>
                          <div className="input-with-icon">
                            <i className="bi bi-person input-icon"></i>
                            <input
                              type="text"
                              id="loginId"
                              placeholder="Contoh: ESA-8829-102 atau nama@email.com"
                              value={loginId}
                              onChange={(e) => setLoginId(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="label-with-action">
                            <label htmlFor="loginPassword">Kata Sandi</label>
                            <a
                              href="#forgot"
                              onClick={(e) => {
                                e.preventDefault();
                                alert('Hubungi Call Center 1500-123 atau WhatsApp Support untuk reset sandi.');
                              }}
                              className="link-forgot"
                            >
                              Lupa Kata Sandi?
                            </a>
                          </div>
                          <div className="input-with-icon">
                            <i className="bi bi-key input-icon"></i>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="loginPassword"
                              placeholder="Masukkan kata sandi portal Anda"
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              className="btn-toggle-eye"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label="Tampilkan sandi"
                            >
                              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                            </button>
                          </div>
                        </div>

                        <div className="form-check">
                          <input type="checkbox" id="rememberMe" defaultChecked />
                          <label htmlFor="rememberMe">Ingat sesi saya di perangkat ini</label>
                        </div>

                        <button type="submit" className="btn-portal-primary">
                          <span>Masuk ke Dashboard</span>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </form>

                      <div className="demo-login-divider">
                        <span>ATAU INGIN MENCOBA DEMO?</span>
                      </div>

                      <button
                        type="button"
                        className="btn-portal-demo"
                        onClick={handleDemoLogin}
                        title="Klik untuk langsung mencoba fitur dashboard pelanggan"
                      >
                        <i className="bi bi-lightning-charge-fill"></i>
                        <span>Coba Demo Akun Pelanggan (1-Klik)</span>
                      </button>
                    </div>
                  )}

                  {/* TAB 2: QUICK BILL CHECK */}
                  {authMode === 'quickBill' && (
                    <div className="auth-tab-content">
                      <div className="auth-header-mini">
                        <h2>Cek Tagihan Instan</h2>
                        <p>Ketahui tagihan bulanan tanpa perlu masuk login.</p>
                      </div>

                      <form onSubmit={handleQuickBill} className="portal-form">
                        <div className="form-group">
                          <label htmlFor="quickBillId">Nomor ID Pelanggan</label>
                          <div className="input-with-icon">
                            <i className="bi bi-hash input-icon"></i>
                            <input
                              type="text"
                              id="quickBillId"
                              placeholder="Masukkan Nomor Pelanggan (cth: ESA-8829-102)"
                              value={quickBillId}
                              onChange={(e) => setQuickBillId(e.target.value)}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn-portal-primary">
                          <i className="bi bi-search"></i>
                          <span>Cari Tagihan</span>
                        </button>
                      </form>

                      {quickBillResult && (
                        <div className="quick-bill-card">
                          <div className="quick-bill-head">
                            <div>
                              <span className="badge-tagihan unpay">BELUM LUNAS</span>
                              <h3>{quickBillResult.period}</h3>
                            </div>
                            <span className="quick-bill-inv">{quickBillResult.invoiceNumber}</span>
                          </div>

                          <div className="quick-bill-details">
                            <div className="bill-row">
                              <span>Nama Pelanggan</span>
                              <strong>{quickBillResult.name}</strong>
                            </div>
                            <div className="bill-row">
                              <span>Paket Layanan</span>
                              <strong>{quickBillResult.packageName}</strong>
                            </div>
                            <div className="bill-row">
                              <span>Jatuh Tempo</span>
                              <strong className="text-danger">{quickBillResult.dueDate}</strong>
                            </div>
                            <div className="bill-divider"></div>
                            <div className="bill-row bill-total">
                              <span>Total Pembayaran</span>
                              <strong className="total-amount">
                                Rp {quickBillResult.amount.toLocaleString('id-ID')}
                              </strong>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="btn-portal-pay-now"
                            onClick={() => {
                              setIsLoggedIn(true);
                              setActiveTab('billing');
                              setShowPayModal(true);
                            }}
                          >
                            <i className="bi bi-wallet2"></i>
                            <span>Bayar Sekarang (BCA, Mandiri, QRIS)</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 3: QUICK TICKET CHECK */}
                  {authMode === 'quickTicket' && (
                    <div className="auth-tab-content">
                      <div className="auth-header-mini">
                        <h2>Lacak Status Tiket Bantuan</h2>
                        <p>Pantau perkembangan penanganan gangguan jaringan Anda.</p>
                      </div>

                      <form onSubmit={handleQuickTicket} className="portal-form">
                        <div className="form-group">
                          <label htmlFor="quickTicketId">Nomor Tiket (Ticket ID)</label>
                          <div className="input-with-icon">
                            <i className="bi bi-upc-scan input-icon"></i>
                            <input
                              type="text"
                              id="quickTicketId"
                              placeholder="Contoh: TKT-20260909-02"
                              value={quickTicketId}
                              onChange={(e) => setQuickTicketId(e.target.value)}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn-portal-primary">
                          <i className="bi bi-search"></i>
                          <span>Lacak Tiket</span>
                        </button>
                      </form>

                      {quickTicketResult && (
                        <div className="quick-ticket-card">
                          <div className="quick-ticket-header">
                            <span className="badge-ticket progress-bg">
                              <i className="bi bi-arrow-repeat spin-icon"></i> {quickTicketResult.status}
                            </span>
                            <span className="ticket-id-badge">{quickTicketResult.ticketId}</span>
                          </div>

                          <h4>{quickTicketResult.category}</h4>
                          <p className="ticket-date-txt">
                            <i className="bi bi-clock"></i> Diajukan pada: {quickTicketResult.createdAt}
                          </p>

                          <div className="progress-bar-container">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${quickTicketResult.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-label">Status Progres: {quickTicketResult.progress}%</span>

                          <div className="ticket-note-box">
                            <i className="bi bi-person-badge"></i>
                            <div>
                              <strong>Teknisi: {quickTicketResult.technician}</strong>
                              <p>{quickTicketResult.notes}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Feature Highlights & Quick Support */}
              <div className="portal-features-col">
                <div className="portal-feature-box">
                  <h3>Keunggulan Portal Pelanggan ESANET</h3>
                  <p>Semua kendali layanan broadband & fiber optik Anda dalam satu genggaman cepat dan aman.</p>

                  <ul className="portal-feature-list">
                    <li>
                      <div className="feat-icon"><i className="bi bi-router-fill"></i></div>
                      <div className="feat-info">
                        <strong>Remote Management ONT Router</strong>
                        <span>Reboot modem, pantau redaman dBm, dan ganti sandi WiFi tanpa teknisi.</span>
                      </div>
                    </li>
                    <li>
                      <div className="feat-icon"><i className="bi bi-credit-card-2-front-fill"></i></div>
                      <div className="feat-info">
                        <strong>Multi-Channel Payment Otomatis</strong>
                        <span>Bayar instan via BCA VA, Mandiri, BRI, QRIS, Alfamart & Indomaret.</span>
                      </div>
                    </li>
                    <li>
                      <div className="feat-icon"><i className="bi bi-speedometer2"></i></div>
                      <div className="feat-info">
                        <strong>Real Speedtest Engine (HTML5 Real-Time)</strong>
                        <span>Uji kecepatan riil unduh & unggah secara simetris multi-thread.</span>
                      </div>
                    </li>
                    <li>
                      <div className="feat-icon"><i className="bi bi-headset"></i></div>
                      <div className="feat-info">
                        <strong>Layanan Bantuan NOC Terintegrasi</strong>
                        <span>Pengajuan tiket keluhan langsung diterima tim engineering 24 jam nonstop.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Helpdesk Callout Card */}
                <div className="portal-helpdesk-card">
                  <div className="helpdesk-icon">
                    <i className="bi bi-telephone-inbound-fill"></i>
                  </div>
                  <div className="helpdesk-content">
                    <h4>Butuh Bantuan Aktivasi Akun?</h4>
                    <p>Tim Customer Care kami siap mendampingi Anda 24 jam sehari.</p>
                    <div className="helpdesk-links">
                      <a href="tel:1500123" className="btn-help-item">
                        <i className="bi bi-headset"></i> 1500-123
                      </a>
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20ESANET,%20saya%20butuh%20bantuan%20Portal%20Pelanggan"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-help-item wa-item"
                      >
                        <i className="bi bi-whatsapp"></i> Chat WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================
           VIEW 2: AUTHENTICATED CUSTOMER SELF-CARE DASHBOARD
           ============================================================ */
        <div className="portal-dashboard">
          {/* Dashboard Header Bar - High Contrast & Real Data */}
          <div className="dashboard-topbar">
            <div className="container db-topbar-inner">
              <div className="db-user-meta">
                <div className="user-avatar-badge">
                  <i className="bi bi-person-badge-fill"></i>
                </div>
                <div className="user-info-text-col">
                  <div className="user-welcome-row">
                    <h2 className="user-name-title">{profile.name}</h2>
                    <span className="status-pill-online">
                      <span className="dot-pulse"></span> {profile.status}
                    </span>
                  </div>
                  <div className="user-submeta">
                    <span>ID: <strong className="white-txt">{profile.customerId}</strong></span>
                    <span className="meta-sep">•</span>
                    <span>Paket: <strong className="white-txt">{profile.package}</strong></span>
                    <span className="meta-sep">•</span>
                    <span>IP Publik (Real): <code className="real-ip-pill">{realNetwork.ip}</code></span>
                  </div>
                </div>
              </div>

              <div className="db-topbar-actions">
                <button
                  type="button"
                  className="btn-db-logout"
                  onClick={handleLogout}
                  title="Keluar dari Portal"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Router Reboot Alert Overlay */}
          {isRebooting && (
            <div className="db-reboot-banner container">
              <div className="reboot-banner-inner">
                <i className="bi bi-arrow-repeat spin-icon"></i>
                <div>
                  <strong>Sedang Me-reboot ONT Router ({rebootTimer}s)...</strong>
                  <p>Harap tunggu sesaat, koneksi akan tersambung kembali secara otomatis.</p>
                </div>
              </div>
            </div>
          )}

          {/* Dashboard Navigation Tabs */}
          <div className="db-nav-container">
            <div className="container">
              <nav className="db-nav-pills">
                <button
                  className={`db-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Ikhtisar Akun</span>
                </button>
                <button
                  className={`db-nav-item ${activeTab === 'billing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('billing')}
                >
                  <i className="bi bi-receipt-cutoff"></i>
                  <span>Tagihan & Pembayaran</span>
                  {billingList.some((b) => b.status === 'Belum Bayar') && (
                    <span className="badge-notification">1</span>
                  )}
                </button>
                <button
                  className={`db-nav-item ${activeTab === 'wifi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wifi')}
                >
                  <i className="bi bi-wifi"></i>
                  <span>Kontrol WiFi & Router</span>
                </button>
                <button
                  className={`db-nav-item ${activeTab === 'speedtest' ? 'active' : ''}`}
                  onClick={() => setActiveTab('speedtest')}
                >
                  <i className="bi bi-speedometer2"></i>
                  <span>Uji Kecepatan (Real Test)</span>
                </button>
                <button
                  className={`db-nav-item ${activeTab === 'tickets' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tickets')}
                >
                  <i className="bi bi-chat-left-dots-fill"></i>
                  <span>Bantuan & Tiket</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Dashboard Tab Content Body */}
          <div className="container db-body-container">
            {/* ================= TAB: OVERVIEW ================= */}
            {activeTab === 'overview' && (
              <div className="db-tab-section">
                {/* 4 Quick Stat Cards */}
                <div className="stat-cards-grid">
                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span className="stat-title">Status Jaringan (Real)</span>
                      <div className="stat-icon-wrap icon-green">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                    </div>
                    <div className="stat-value text-success">ONLINE</div>
                    <p className="stat-sub">Redaman Optik: {profile.opticalPower}</p>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span className="stat-title">Paket Berlangganan</span>
                      <div className="stat-icon-wrap icon-blue">
                        <i className="bi bi-hdd-network-fill"></i>
                      </div>
                    </div>
                    <div className="stat-value">100 Mbps</div>
                    <p className="stat-sub">Simetris 1:1 Tanpa FUP Kuota</p>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span className="stat-title">Tagihan Berjalan</span>
                      <div className="stat-icon-wrap icon-orange">
                        <i className="bi bi-wallet-fill"></i>
                      </div>
                    </div>
                    <div className="stat-value">
                      {billingList[0].status === 'Lunas' ? 'LUNAS' : `Rp ${profile.price.toLocaleString('id-ID')}`}
                    </div>
                    <p className="stat-sub">
                      {billingList[0].status === 'Lunas' ? 'Tagihan lunas terbayar' : 'Jatuh Tempo: 20 Sep 2026'}
                    </p>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span className="stat-title">Total Pemakaian Bulan Ini</span>
                      <div className="stat-icon-wrap icon-teal">
                        <i className="bi bi-arrow-down-up"></i>
                      </div>
                    </div>
                    <div className="stat-value">482.4 GB</div>
                    <p className="stat-sub">Download 391 GB | Upload 91.4 GB</p>
                  </div>
                </div>

                {/* Main Content Grid: Router Diagnostic & Quick Actions */}
                <div className="db-overview-columns">
                  {/* Left Column: Router Hardware & Connection Diagnostics */}
                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-router"></i>
                        <h3>Diagnostik Perangkat & Jaringan Real</h3>
                      </div>
                      <button
                        type="button"
                        className="btn-card-action"
                        onClick={handleRebootRouter}
                        disabled={isRebooting}
                      >
                        <i className="bi bi-arrow-clockwise"></i>
                        <span>Reboot Router</span>
                      </button>
                    </div>
                    <div className="db-card-body">
                      <div className="diagnostics-list">
                        <div className="diag-item">
                          <span className="diag-label">IP Publik Anda (Real Terdeteksi)</span>
                          <span className="diag-val font-mono real-ip-tag">{realNetwork.ip}</span>
                        </div>
                        <div className="diag-item">
                          <span className="diag-label">ISP / Penyedia Jaringan</span>
                          <span className="diag-val font-semibold">{realNetwork.isp}</span>
                        </div>
                        <div className="diag-item">
                          <span className="diag-label">Lokasi Gateway / Kota</span>
                          <span className="diag-val">{realNetwork.city}, {realNetwork.country}</span>
                        </div>
                        <div className="diag-item">
                          <span className="diag-label">Perangkat Modem ONT</span>
                          <span className="diag-val font-semibold">{profile.ontModel}</span>
                        </div>
                        <div className="diag-item">
                          <span className="diag-label">Kualitas Sinyal Optik (Rx Power)</span>
                          <span className="diag-val text-success font-semibold">
                            <i className="bi bi-check2-all"></i> -19.4 dBm (Sangat Baik / Optimal)
                          </span>
                        </div>
                        <div className="diag-item">
                          <span className="diag-label">Uptime Perangkat</span>
                          <span className="diag-val">{profile.uptime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quick Billing & Support Shortcuts */}
                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-lightning-fill"></i>
                        <h3>Aksi Cepat & Layanan</h3>
                      </div>
                    </div>
                    <div className="db-card-body">
                      <div className="quick-actions-list">
                        <div className="qa-item" onClick={() => setActiveTab('speedtest')}>
                          <div className="qa-icon icon-blue">
                            <i className="bi bi-speedometer2"></i>
                          </div>
                          <div className="qa-text">
                            <strong>Uji Kecepatan Koneksi (Real Test)</strong>
                            <span>Real HTML5 Speed Engine (seperti speedtest.net & speed.is)</span>
                          </div>
                          <i className="bi bi-chevron-right qa-arrow"></i>
                        </div>

                        <div className="qa-item" onClick={() => setActiveTab('wifi')}>
                          <div className="qa-icon icon-teal">
                            <i className="bi bi-key-fill"></i>
                          </div>
                          <div className="qa-text">
                            <strong>Ganti Nama / Sandi WiFi</strong>
                            <span>Kelola SSID 2.4GHz & 5GHz</span>
                          </div>
                          <i className="bi bi-chevron-right qa-arrow"></i>
                        </div>

                        <div className="qa-item" onClick={() => setActiveTab('billing')}>
                          <div className="qa-icon icon-orange">
                            <i className="bi bi-credit-card"></i>
                          </div>
                          <div className="qa-text">
                            <strong>Bayar Tagihan Bulanan</strong>
                            <span>Lihat invoice dan metode pembayaran</span>
                          </div>
                          <i className="bi bi-chevron-right qa-arrow"></i>
                        </div>

                        <div className="qa-item" onClick={() => setActiveTab('tickets')}>
                          <div className="qa-icon icon-purple">
                            <i className="bi bi-chat-dots-fill"></i>
                          </div>
                          <div className="qa-text">
                            <strong>Buat Tiket Bantuan NOC</strong>
                            <span>Dukungan teknis 24/7 standby</span>
                          </div>
                          <i className="bi bi-chevron-right qa-arrow"></i>
                        </div>
                      </div>

                      <div className="system-notice-box">
                        <i className="bi bi-shield-check"></i>
                        <div>
                          <strong>Proteksi Jalur Redundan</strong>
                          <p>Koneksi internet Anda dialihkan secara otomatis jika terjadi gangguan kabel laut utama.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: BILLING & PAYMENT ================= */}
            {activeTab === 'billing' && (
              <div className="db-tab-section">
                <div className="db-card mb-4">
                  <div className="db-card-header">
                    <div className="db-card-title">
                      <i className="bi bi-receipt"></i>
                      <h3>Tagihan Bulan Berjalan</h3>
                    </div>
                  </div>
                  <div className="db-card-body">
                    <div className="current-bill-card">
                      <div className="bill-card-left">
                        <span className="bill-tag">Tagihan Periode September 2026</span>
                        <h2>Rp {profile.price.toLocaleString('id-ID')}</h2>
                        <p className="bill-detail-line">
                          Nomor Invoice: <strong>ESA-INV-202609-082</strong> • Jatuh Tempo: <span className="text-danger">20 September 2026</span>
                        </p>
                        <p className="bill-package-name">
                          Layanan: <strong>{profile.package}</strong> (Pajak PPN 11% sudah termasuk)
                        </p>
                      </div>
                      <div className="bill-card-right">
                        {billingList[0].status === 'Lunas' ? (
                          <div className="paid-status-chip">
                            <i className="bi bi-patch-check-fill"></i>
                            <span>TAGIHAN SUDAH LUNAS</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="btn-portal-primary btn-lg"
                            onClick={() => setShowPayModal(true)}
                          >
                            <i className="bi bi-wallet2"></i>
                            <span>Bayar Tagihan Sekarang</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment History Table */}
                <div className="db-card">
                  <div className="db-card-header">
                    <div className="db-card-title">
                      <i className="bi bi-clock-history"></i>
                      <h3>Riwayat Pembayaran & Unduh Invoice</h3>
                    </div>
                  </div>
                  <div className="db-card-body p-0">
                    <div className="table-responsive">
                      <table className="db-table">
                        <thead>
                          <tr>
                            <th>No. Invoice</th>
                            <th>Periode</th>
                            <th>Batas Waktu</th>
                            <th>Nominal</th>
                            <th>Status</th>
                            <th>Waktu Bayar</th>
                            <th>Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {billingList.map((bill) => (
                            <tr key={bill.id}>
                              <td><strong className="font-mono">{bill.id}</strong></td>
                              <td>{bill.period}</td>
                              <td>{bill.dueDate}</td>
                              <td><strong>Rp {bill.amount.toLocaleString('id-ID')}</strong></td>
                              <td>
                                <span className={`badge-status ${bill.status === 'Lunas' ? 'badge-paid' : 'badge-unpaid'}`}>
                                  {bill.status}
                                </span>
                              </td>
                              <td className="text-muted text-sm">{bill.paymentDate}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-table-action"
                                  onClick={() => triggerToast(`Mengunduh invoice resmi ${bill.id} (PDF)...`)}
                                  title="Unduh Invoice PDF"
                                >
                                  <i className="bi bi-download"></i> PDF
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: WIFI & ROUTER CONTROL ================= */}
            {activeTab === 'wifi' && (
              <div className="db-tab-section">
                <div className="wifi-grid">
                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-broadcast"></i>
                        <h3>Pengaturan SSID & Sandi WiFi</h3>
                      </div>
                    </div>
                    <div className="db-card-body">
                      {showWifiSuccess && (
                        <div className="portal-alert-success">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Pengaturan WiFi berhasil disimpan ke ONT Router Anda!</span>
                        </div>
                      )}

                      <form onSubmit={handleSaveWifi} className="portal-form">
                        <div className="form-group">
                          <label htmlFor="ssid24">Nama WiFi 2.4 GHz (Jangkauan Luas)</label>
                          <div className="input-with-icon">
                            <i className="bi bi-wifi input-icon"></i>
                            <input
                              type="text"
                              id="ssid24"
                              value={wifiForm.ssid24}
                              onChange={(e) => setWifiForm({ ...wifiForm, ssid24: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="ssid5">Nama WiFi 5.0 GHz (Kecepatan Maksimal / Gaming)</label>
                          <div className="input-with-icon">
                            <i className="bi bi-lightning-charge input-icon"></i>
                            <input
                              type="text"
                              id="ssid5"
                              value={wifiForm.ssid5}
                              onChange={(e) => setWifiForm({ ...wifiForm, ssid5: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="wifiPass">Kata Sandi WiFi (WPA2/WPA3)</label>
                          <div className="input-with-icon">
                            <i className="bi bi-shield-lock input-icon"></i>
                            <input
                              type="text"
                              id="wifiPass"
                              value={wifiForm.password}
                              onChange={(e) => setWifiForm({ ...wifiForm, password: e.target.value })}
                            />
                          </div>
                          <span className="input-hint">Minimal 8 karakter kombinasi huruf dan angka.</span>
                        </div>

                        <button type="submit" className="btn-portal-primary">
                          <i className="bi bi-check2-circle"></i>
                          <span>Terapkan Perubahan ke Router</span>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-laptop"></i>
                        <h3>Perangkat Terhubung (5 Online)</h3>
                      </div>
                    </div>
                    <div className="db-card-body p-0">
                      <div className="connected-devices-list">
                        <div className="device-item">
                          <div className="dev-icon"><i className="bi bi-phone"></i></div>
                          <div className="dev-meta">
                            <strong>iPhone 15 Pro Max (Budi)</strong>
                            <span>IP: 192.168.1.12 • Band: 5 GHz</span>
                          </div>
                          <span className="dev-badge">Aktif</span>
                        </div>

                        <div className="device-item">
                          <div className="dev-icon"><i className="bi bi-laptop"></i></div>
                          <div className="dev-meta">
                            <strong>MacBook Pro M3 Max</strong>
                            <span>IP: 192.168.1.15 • Band: 5 GHz</span>
                          </div>
                          <span className="dev-badge">Aktif</span>
                        </div>

                        <div className="device-item">
                          <div className="dev-icon"><i className="bi bi-tv"></i></div>
                          <div className="dev-meta">
                            <strong>Samsung Smart TV QLED 65"</strong>
                            <span>IP: 192.168.1.18 • Band: 2.4 GHz</span>
                          </div>
                          <span className="dev-badge">Aktif</span>
                        </div>

                        <div className="device-item">
                          <div className="dev-icon"><i className="bi bi-camera-video"></i></div>
                          <div className="dev-meta">
                            <strong>EZVIZ CCTV Outdoor Garasi</strong>
                            <span>IP: 192.168.1.20 • Band: 2.4 GHz</span>
                          </div>
                          <span className="dev-badge">Aktif</span>
                        </div>

                        <div className="device-item">
                          <div className="dev-icon"><i className="bi bi-controller"></i></div>
                          <div className="dev-meta">
                            <strong>PlayStation 5</strong>
                            <span>IP: 192.168.1.25 • Kabel LAN Gigabit</span>
                          </div>
                          <span className="dev-badge">Aktif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================
                TAB: REAL SPEEDTEST ENGINE (LIKE SPEEDTEST.NET & SPEED.IS)
                ============================================================ */}
            {activeTab === 'speedtest' && (
              <div className="db-tab-section">
                <div className="real-speedtest-container">
                  {/* Real IP & Network Info Header */}
                  <div className="speedtest-network-meta-box">
                    <div className="net-meta-col">
                      <span className="meta-lbl">IP Publik Asli Anda:</span>
                      <strong className="meta-val font-mono real-ip-tag">{realNetwork.ip}</strong>
                    </div>
                    <div className="net-meta-col">
                      <span className="meta-lbl">Penyedia Jaringan (ISP):</span>
                      <strong className="meta-val">{realNetwork.isp}</strong>
                    </div>
                    <div className="net-meta-col">
                      <span className="meta-lbl">Lokasi Terdeteksi:</span>
                      <strong className="meta-val">{realNetwork.city}, Indonesia</strong>
                    </div>
                    <div className="net-meta-col">
                      <span className="meta-lbl">Mesin Uji:</span>
                      <span className="engine-badge-live">
                        <span className="dot-pulse"></span> HTML5 Live Real Engine
                      </span>
                    </div>
                  </div>

                  {/* Primary Speedtest: Real HTML5 Live Multi-Thread Speedometer (OpenSpeedTest Engine) */}
                  <div className="speedtest-card">
                    <div className="speedtest-header">
                      <h2>Real Speedtest Jaringan Internet (Live)</h2>
                      <p>
                        Pengujian live multi-stream real-time langsung mengukur kecepatan unduh, unggah, dan ping aktual jaringan Anda seperti pada <strong>speedtest.net</strong> &amp; <strong>speed.is</strong>.
                      </p>
                    </div>

                    {/* Embedded 100% Real HTML5 Engine with Speedometer Needle & Multi-Thread Streams */}
                    <div className="speedtest-iframe-card">
                      <div className="speedtest-iframe-responsive">
                        <iframe
                          src="https://openspeedtest.com/speedtest"
                          title="ESANET Real Network Speed Test"
                          className="speedtest-live-frame"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Global Benchmark Hub Shortcuts */}
                  <div className="benchmark-hub-card">
                    <div className="benchmark-hub-head">
                      <i className="bi bi-globe2"></i>
                      <div>
                        <h3>Alternatif Pengujian Ke Server Benchmark Global</h3>
                        <p>Bandingkan hasil pengujian Anda dengan server global lainnya secara langsung:</p>
                      </div>
                    </div>

                    <div className="benchmark-links-grid">
                      <a
                        href="https://www.speedtest.net"
                        target="_blank"
                        rel="noreferrer"
                        className="benchmark-btn ookla"
                      >
                        <div className="bm-icon"><i className="bi bi-speedometer2"></i></div>
                        <div className="bm-info">
                          <strong>Speedtest by Ookla</strong>
                          <span>www.speedtest.net</span>
                        </div>
                        <i className="bi bi-box-arrow-up-right bm-ext"></i>
                      </a>

                      <a
                        href="https://speed.is"
                        target="_blank"
                        rel="noreferrer"
                        className="benchmark-btn speedis"
                      >
                        <div className="bm-icon"><i className="bi bi-lightning-charge-fill"></i></div>
                        <div className="bm-info">
                          <strong>Speed.is</strong>
                          <span>speed.is Real-Time Test</span>
                        </div>
                        <i className="bi bi-box-arrow-up-right bm-ext"></i>
                      </a>

                      <a
                        href="https://fast.com"
                        target="_blank"
                        rel="noreferrer"
                        className="benchmark-btn fastcom"
                      >
                        <div className="bm-icon"><i className="bi bi-film"></i></div>
                        <div className="bm-info">
                          <strong>Fast.com (Netflix)</strong>
                          <span>fast.com CDN Servers</span>
                        </div>
                        <i className="bi bi-box-arrow-up-right bm-ext"></i>
                      </a>

                      <a
                        href="https://speed.cloudflare.com"
                        target="_blank"
                        rel="noreferrer"
                        className="benchmark-btn cloudflare"
                      >
                        <div className="bm-icon"><i className="bi bi-cloud-check-fill"></i></div>
                        <div className="bm-info">
                          <strong>Cloudflare Speed</strong>
                          <span>speed.cloudflare.com</span>
                        </div>
                        <i className="bi bi-box-arrow-up-right bm-ext"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: TICKETS & SUPPORT ================= */}
            {activeTab === 'tickets' && (
              <div className="db-tab-section">
                <div className="tickets-grid">
                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-pencil-square"></i>
                        <h3>Buat Tiket Bantuan / Lapor Kendala</h3>
                      </div>
                    </div>
                    <div className="db-card-body">
                      {ticketSuccess && (
                        <div className="portal-alert-success">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Tiket baru berhasil diajukan! Tim NOC segera menindaklanjuti.</span>
                        </div>
                      )}

                      <form onSubmit={handleCreateTicket} className="portal-form">
                        <div className="form-group">
                          <label htmlFor="tktCategory">Kategori Masalah</label>
                          <select
                            id="tktCategory"
                            value={newTicket.category}
                            onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                          >
                            <option value="Koneksi Terputus (Lampu LOS Merah)">Koneksi Terputus (Lampu LOS Merah)</option>
                            <option value="Koneksi Lambat / Fluktuatif">Koneksi Lambat / Fluktuatif</option>
                            <option value="Permintaan Perubahan Password WiFi">Permintaan Perubahan Password WiFi</option>
                            <option value="Relokasi Perangkat / Pindah Alamat">Relokasi Perangkat / Pindah Alamat</option>
                            <option value="Pertanyaan Tagihan / Invoice">Pertanyaan Tagihan / Invoice</option>
                            <option value="Permintaan IP Publik Statis">Permintaan IP Publik Statis</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="tktSubject">Subjek Keluhan Singkat</label>
                          <input
                            type="text"
                            id="tktSubject"
                            placeholder="Contoh: Sinyal WiFi sering putus di lantai 2"
                            value={newTicket.subject}
                            onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="tktDesc">Rincian & Kronologi Keluhan</label>
                          <textarea
                            id="tktDesc"
                            rows={4}
                            placeholder="Tuliskan kendala yang Anda alami secara detail..."
                            value={newTicket.description}
                            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label htmlFor="tktPhone">Nomor WhatsApp Aktif untuk Konfirmasi</label>
                          <input
                            type="text"
                            id="tktPhone"
                            value={newTicket.phone}
                            onChange={(e) => setNewTicket({ ...newTicket, phone: e.target.value })}
                          />
                        </div>

                        <button type="submit" className="btn-portal-primary">
                          <i className="bi bi-send-fill"></i>
                          <span>Kirim Tiket ke Tim NOC</span>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="db-card">
                    <div className="db-card-header">
                      <div className="db-card-title">
                        <i className="bi bi-list-check"></i>
                        <h3>Daftar Tiket Anda ({tickets.length})</h3>
                      </div>
                    </div>
                    <div className="db-card-body p-0">
                      <div className="tickets-list">
                        {tickets.map((tkt) => (
                          <div key={tkt.id} className="ticket-item-row">
                            <div className="ticket-item-head">
                              <span className="ticket-id-tag">{tkt.id}</span>
                              <span className={`badge-ticket-status ${tkt.badgeClass}`}>
                                {tkt.status}
                              </span>
                            </div>
                            <h4 className="ticket-item-subject">{tkt.subject}</h4>
                            <div className="ticket-item-foot">
                              <span><i className="bi bi-tag"></i> {tkt.category}</span>
                              <span><i className="bi bi-calendar"></i> {tkt.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= PAYMENT MODAL ================= */}
          {showPayModal && (
            <div className="portal-modal-backdrop" onClick={() => setShowPayModal(false)}>
              <div className="portal-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-head">
                  <h3>Bayar Tagihan ESANET</h3>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setShowPayModal(false)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="modal-summary-box">
                    <div className="m-row">
                      <span>Invoice</span>
                      <strong>ESA-INV-202609-082</strong>
                    </div>
                    <div className="m-row">
                      <span>Total Tagihan</span>
                      <strong className="m-total">Rp {profile.price.toLocaleString('id-ID')}</strong>
                    </div>
                  </div>

                  <h4>Pilih Metode Pembayaran:</h4>
                  <div className="pay-methods-list">
                    <label className={`pay-method-item ${selectedPaymentMethod === 'bca_va' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="payMethod"
                        checked={selectedPaymentMethod === 'bca_va'}
                        onChange={() => setSelectedPaymentMethod('bca_va')}
                      />
                      <div className="pm-info">
                        <strong>BCA Virtual Account</strong>
                        <code>88001 08829 102</code>
                      </div>
                      <button
                        type="button"
                        className="btn-copy-code"
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard?.writeText('8800108829102');
                          triggerToast('Nomor BCA Virtual Account berhasil disalin!');
                        }}
                      >
                        Salin
                      </button>
                    </label>

                    <label className={`pay-method-item ${selectedPaymentMethod === 'mandiri_va' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="payMethod"
                        checked={selectedPaymentMethod === 'mandiri_va'}
                        onChange={() => setSelectedPaymentMethod('mandiri_va')}
                      />
                      <div className="pm-info">
                        <strong>Mandiri Virtual Account</strong>
                        <code>89100 08829 102</code>
                      </div>
                      <button
                        type="button"
                        className="btn-copy-code"
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard?.writeText('8910008829102');
                          triggerToast('Nomor Mandiri Virtual Account disalin!');
                        }}
                      >
                        Salin
                      </button>
                    </label>

                    <label className={`pay-method-item ${selectedPaymentMethod === 'qris' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="payMethod"
                        checked={selectedPaymentMethod === 'qris'}
                        onChange={() => setSelectedPaymentMethod('qris')}
                      />
                      <div className="pm-info">
                        <strong>QRIS Semua Dompet Digital / Mobile Banking</strong>
                        <span>Scan instan via GoPay, OVO, Dana, ShopeePay, BCA, dll.</span>
                      </div>
                    </label>
                  </div>

                  {paymentSuccess ? (
                    <div className="payment-processing-box">
                      <i className="bi bi-check-circle-fill success-icon"></i>
                      <h4>Pembayaran Sukses Diverifikasi!</h4>
                      <p>Mengupdate data tagihan Anda...</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btn-portal-primary btn-block"
                      onClick={handleConfirmPayment}
                    >
                      <i className="bi bi-shield-lock-fill"></i>
                      <span>Konfirmasi Pembayaran Selesai</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerPortal;
