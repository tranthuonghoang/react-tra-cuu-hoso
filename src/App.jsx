import React, { useState } from 'react'

const ENDPOINT = 'https://script.google.com/macros/s/1OUJYGCS3qEDW2hRsU_VRfZxUTosh84LzKRbdwRxDqLzy_GIkr7--xqUR/exec'

export default function App() {
  const [hoTen, setHoTen] = useState('')
  const [sdt, setSdt] = useState('')
  const [maGCN, setMaGCN] = useState('')
  const [loading, setLoading] = useState(false)
  const [ketQua, setKetQua] = useState('')

  const traCuu = async () => {
    if (!hoTen && !sdt && !maGCN) {
      setKetQua('Vui lòng nhập ít nhất 1 thông tin: Họ tên / SĐT / Mã GCN.')
      return
    }
    setLoading(true)
    setKetQua('')
    try {
      const url = `${ENDPOINT}?hoten=${encodeURIComponent(hoTen)}&sdt=${encodeURIComponent(sdt)}&magcn=${encodeURIComponent(maGCN)}`
      const res = await fetch(url, { method: 'GET' })
      const text = await res.text()
      setKetQua(text || 'Không có phản hồi từ máy chủ.')
    } catch (e) {
      setKetQua('Không kết nối được máy chủ tra cứu. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="wrap">
      <div className="card">
        <img className="logo" src="./logo.png" alt="Logo đơn vị" />
        <h1>Tra cứu kết quả hồ sơ đất đai</h1>
        <p className="sub">Chi nhánh VPĐKĐĐ huyện Yên Thành, Nghệ An</p>

        <div className="grid">
          <label>
            Họ tên chủ sử dụng
            <input value={hoTen} onChange={e=>setHoTen(e.target.value)} placeholder="Ví dụ: Nguyễn Văn A" />
          </label>
          <label>
            Số điện thoại
            <input value={sdt} onChange={e=>setSdt(e.target.value)} placeholder="Ví dụ: 0912xxxxxx" />
          </label>
          <label>
            Số phát hành GCN
            <input value={maGCN} onChange={e=>setMaGCN(e.target.value)} placeholder="Ví dụ: CS/NA-123456" />
          </label>
        </div>

        <button className="btn" onClick={traCuu} disabled={loading}>
          {loading ? 'Đang tra cứu...' : 'Tra cứu'}
        </button>

        <div className="result" dangerouslySetInnerHTML={{__html: ketQua?.replace(/\n/g, '<br/>')}} />
        <p className="hint">Nhập ít nhất 1 thông tin. Kết quả lấy từ sheet DVC‑HCC.</p>
      </div>
      <footer>© {new Date().getFullYear()} VPĐKĐĐ Yên Thành</footer>
    </div>
  )
}
