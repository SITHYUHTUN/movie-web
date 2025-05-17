const token = process.env.TMDB_TOKEN;

async function  fetchCasts(id) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return (await res.json()).cast;
}
export default async function Persons({movie}) {
    const casts = await fetchCasts(movie.id);
    const profile = "http://image.tmdb.org/t/p/w185";
    return (
        <div className="flex gap-4 felx-row flex-wrap">
            {
                casts.map(cast => {
                    return (
                        <div
                            key={cast.id }
                            className="w-[180px] bg-gray-100 text-center flex flex-col justify-between"
                        >
                            {cast.profile_path ? (
                                <img src={profile + cast.profile_path} />
                            ): (
                                <div></div>
                            )
                        }
                        <div>
                            <div></div>
                            <span>{cast.character}</span>
                        </div>

                        </div>
                    );
                })
            }
        </div>
    )
}