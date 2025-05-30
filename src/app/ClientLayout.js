import Master from "./component/Master";


export const metadata = {
  title: "",
  description: "",
  keyword:""
};

export default function ClientLayout({ children }) {
  return (
    
  <Master>
    {children}
  </Master>
     
  );
}
