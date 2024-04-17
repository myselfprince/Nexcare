import Link from "next/link";


const Tools = (props) => {
    const IconComponent  = props.iconName
    const icon_class = props.iconClass;
  return (
    <div> 
        <Link href={props.link} >
            <div className="flex justify-start items-center my-2 lg:w-[24vw] ">
                    <IconComponent  className={icon_class} />
                <div>
                    <h3>{props.title}</h3>
                    <p className="text-[13px]">{props.para}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Tools