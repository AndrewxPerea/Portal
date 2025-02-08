export default function layoutAuth({ children }: {children: React.ReactNode}) {
    return(
        <div className="flex flex-col justify-center h-full items-center">
            <p> Logo</p>
                <h1 className="text-3xl my-2">
                    Dashboard
                </h1>
            
            {children}
        </div>
    )

}