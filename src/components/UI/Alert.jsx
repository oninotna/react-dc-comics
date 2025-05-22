// function AlertMsg({type, message}) {
//   return (
//     <div className="alert-section">
//       <div className={`alert alert-${type}`}>
//         <h1>Type error: {type}</h1>
//         <div className="alert-message">{message}</div>
//       </div>
//     </div>
//   );
// }

export default function Alert({ type, children }) {
  const correctTypes = ["error", "info", "warning", "success"];
  if (type === undefined || !correctTypes.includes(type)) {
    type = "error";
  }

//   return correctTypes.map((correctType, index) => {
//     return <AlertMsg key={index} type={correctType} message={children || "Si è verificato un' errore"} />
//   });

  return (
    <div className="alert-section">
      <div className={`alert alert-${type}`}>
        <h1>Type error: {type}</h1>
        <div className="alert-message">
          {children || "Si è verificato un errore"}
        </div>
      </div>
    </div>
  );
}
