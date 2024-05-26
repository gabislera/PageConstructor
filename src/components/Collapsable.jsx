export function Collapsable({ title, children, class: _class, open, onToggle }) {
  return (
    <div className={_class}>
      <details
        className='group peer cursor-pointer select-none marker:content-[""]'
        open={open}
        onClick={e => {
          e.preventDefault()
          onToggle()
        }}
        style={{
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <summary>{title}</summary>
      </details>
      <div
        style={{
          display: 'grid',
          transition: 'all 300ms',
          gridTemplateRows: '0fr',
        }}
        className={open ? 'open' : ''}
      >
        <div
          style={{
            overflow: 'hidden',
            gridTemplateRows: open ? '1fr' : '0fr',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}