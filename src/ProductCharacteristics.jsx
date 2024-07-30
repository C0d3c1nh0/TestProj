import "./ProductCharacteristics.css"

function ProductCharacteristics() {
  return(
    <>
      <div className="productInfo__characteristics">
        <h2>Characteristics</h2>
        <div className="productInfo__characteristics-info">

          <div className="power-supply-info">
            <h3 className="show-info-text">Power supply</h3>
            <article className="info-type">
              <p className="info-name">Battery capacity</p>
              <p className="info-value">4441 mAh</p>
            </article>
            <article className="info-type">
              <p className="info-name">DxOMark test (battery)</p>
              <p className="info-value">134</p>
            </article>
            <article className="info-type">
              <p className="info-name">Fast charging</p>
              <p className="info-value">Power Delivery 2.0</p>
            </article>
            <article className="info-type">
              <p className="info-name">Charger power</p>
              <p className="info-value">20 W</p>
            </article>
            <article className="info-type">
              <p className="info-name">Fast charging time</p>
              <p className="info-value">50% in 30 min</p>
            </article>
            <article className="info-type">
              <p className="info-name">Wireless charging</p>
              <p className="info-value">15 W</p>
            </article>
          </div>
          <div className="hardware-part-info">
            <h3 className="show-info-text">Hardware Part</h3>
            <article className="info-type">
              <p className="info-name">Operating system</p>
              <p className="info-value">iOS</p>
            </article>
            <article className="info-type">
              <p className="info-name">CPU model</p>
              <p className="info-value">Apple A17 Pro</p>
            </article>
            <article className="info-type">
              <p className="info-name">CPU frequency</p>
              <p className="info-value">3.78 GHz</p>
            </article>
            <article className="info-type">
              <p className="info-name">CPU cores</p>
              <p className="info-value">6</p>
            </article>
            <article className="info-type">
              <p className="info-name">GPU</p>
              <p className="info-value">Apple GPU 6-core graphics</p>
            </article>
            <article className="info-type">
              <p className="info-name">RAM</p>
              <p className="info-value">8 GB</p>
            </article>
            <article className="info-type">
              <p className="info-name">RAM type</p>
              <p className="info-value">LPDDR5</p>
            </article>
            <article className="info-type">
              <p className="info-name">Memory storage</p>
              <p className="info-value">256 GB</p>
            </article>
          </div>
          <div className="main-camera-info">
            <h3 className="show-info-text">Main Camera</h3>
            <article className="info-type">
              <p className="info-name">Lenses</p>
              <p className="info-value">3 modules</p>
            </article>
            <article className="info-type">
              <p className="info-name">Main lens</p>
              <p className="info-value">48 MP
                f/1.8
                24 mm
                Sony IMX803, 1/1.28"</p>
            </article>
            <article className="info-type">
              <p className="info-name">Ultra wide lens</p>
              <p className="info-value">13.4 MP
                f/2.2
                13 mm
                120 °
                Sony IMX633</p>
            </article>
            <article className="info-type">
              <p className="info-name">Full HD (1080p)</p>
              <p className="info-value">60 fps</p>
            </article>
            <article className="info-type">
              <p className="info-name">Image stabilization</p>
              <p className="info-value">optical + matrix shift</p>
            </article>
            <article className="info-type">
              <p className="info-name">Camera zoom</p>
              <p className="info-value">9.3 x</p>
            </article>
          </div>
          <div className="front-camera-info">
            <h3 className="show-info-text">Connections and communication</h3>
            <article className="info-type">
              <p className="info-name">Cellular technology</p>
              <p className="info-value">5G / 4G (LTE) / 3G / GSM
                CDMA</p>
            </article>
            <article className="info-type">
              <p className="info-name">SIM card type</p>
              <p className="info-value">nano+e-SIM</p>
            </article>
            <article className="info-type">
              <p className="info-name">SIM slots</p>
              <p className="info-value">2 SIM</p>
            </article>
            <article className="info-type">
              <p className="info-name">Connectivity technology</p>
              <p className="info-value">Wi-Fi 6E (802.11ax)
                Bluetooth v 5.3
                NFC
                satellite connection</p>
            </article>
            <article className="info-type">
              <p className="info-name">Inputs & outputs</p>
              <p className="info-value">USB C 3.2 gen2</p>
            </article>
          </div>
          <div className="connections-and-communication-info">
            <h3 className="show-info-text">Front camera</h3>
            <article className="info-type">
              <p className="info-name">Form factor</p>
              <p className="info-value">in display</p>
            </article>
            <article className="info-type">
              <p className="info-name">Main selfie lens</p>
              <p className="info-value">12 MP</p>
            </article>
            <article className="info-type">
              <p className="info-name">Aperture</p>
              <p className="info-value">f/1.9</p>
            </article>
            <article className="info-type">
              <p className="info-name">Full HD (1080p)</p>
              <p className="info-value">60 fps</p>
            </article>
            <article className="info-type">
              <p className="info-name">Ultra HD (4K)</p>
              <p className="info-value">60 fps</p>
            </article>
          </div>
          <div className="display-info">
            <h3 className="show-info-text">Display</h3>
            <article className="info-type">
              <p className="info-name">Resolution</p>
              <p className="info-value">2796х1290</p>
            </article>
            <article className="info-type">
              <p className="info-name">Matrix</p>
              <p className="info-value">OLED (LTPO)</p>
            </article>
            <article className="info-type">
              <p className="info-name">Frequency</p>
              <p className="info-value">120 Hz</p>
            </article>
            <article className="info-type">
              <p className="info-name">Diagonal</p>
              <p className="info-value">6.7 "</p>
            </article>
            <article className="info-type">
              <p className="info-name">Pixel density</p>
              <p className="info-value">460 ppi</p>
            </article>
            <article className="info-type">
              <p className="info-name">Brightness</p>
              <p className="info-value">2000 nit</p>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCharacteristics