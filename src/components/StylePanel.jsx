import '../styles/StylePanel.css';

export default function StylePanel({fontStyle,handleFontStyle,isPreviewMode,setIsPreviewMode}){
    return (
          <div className="style-panel">

          <div className="form-control">
            <label>Background Color:</label>
            <input
              type="color"
              name="backgroundColor"
              value={fontStyle.backgroundColor}
              onChange={handleFontStyle}
            />
          </div>

          <div className="form-control">
            <label>Text Color:</label>
            <input
              type="color"
              name="color"
              value={fontStyle.color}
              onChange={handleFontStyle}
            />
          </div>

          <div className="form-control">
            <label>Font Size (px):</label>
            <input
              type="range"
              name="fontSize"
              min="12"
              max="24"
              value={fontStyle.fontSize}
              onChange={handleFontStyle}
            />
          </div>

          <div className="form-control">
            <label>Line Height:</label>
            <input
              type="range"
              name="lineHeight"
              min="1"
              max="2"
              step="0.1"
              value={fontStyle.lineHeight}
              onChange={handleFontStyle}
            />
          </div>

          <div className="form-control">
            <label>Font Family:</label>
            <select
              name="fontFamily"
              value={fontStyle.fontFamily}
              onChange={handleFontStyle}
            >
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Roboto">Roboto</option>
              <option value="Poppins">Poppins</option>
            </select>
          </div>

          <div className="control-buttons">
            <h3>Actions:</h3>
            <button
              className="toggle-preview-btn"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
            >
              {isPreviewMode ? '✏️ CV' : '👁️ CV'}
            </button>

            <button onClick={() => window.print()} className="print-btn">
              🖨️ CV
            </button>
          </div>
        </div>
    )
}