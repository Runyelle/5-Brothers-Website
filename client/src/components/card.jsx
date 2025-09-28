export function Card({ children, className }) {
    return (
      <div className={`rounded-2xl shadow-md border border-gray-700 bg-gray-900 p-6 ${className}`}>
        {children}
      </div>
    );
  }

export function CardHeader({ children, className = "" }) {
    return (
      <div className={`mb-4 border-b border-gray-700 pb-2 ${className}`}>
        {children}
      </div>
    );
  }
  
export function CardTitle({ children, className = "" }) {
    return (
      <h3 className={`text-xl font-semibold text-white ${className}`}>
        {children}
      </h3>
    );
  }
  
export function CardContent({ children, className }) {
    return (
      <div className={`text-gray-200 ${className}`}>
        {children}
      </div>
    );
  }