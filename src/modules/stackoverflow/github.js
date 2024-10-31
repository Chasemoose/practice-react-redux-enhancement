import React from "react";
// import { useSelector, useSelector } from 'react-redux'
// import { setPhrase, setLogin, getRepos } from "./github.actions";

const StackPverFlow = () => {

    // const { login, phrase, repos } = useSelector(state => state)
    // const dispatch = useDispatch()

    // function handleLoginChange(e) {
    //     const login = e.target.value
    //     dispatch(setLogin(login))
    //     dispatch(getRepos())
    // }

	return (
		<section>
			<form>
				<input name='phrase' value={phrase} onChange={e => dispatch(setPhrase(e.target.value))}></input>
                <select name='sort' value={sort} onChange={e => dispatch(setPhrase(e.target.value))}>
                    <option value="activity">activity</option>
                    <option value="votes">votes</option>

                </select>
			</form>

            <ul>
                {repos.filter(r => r.name.includes(phrase)).map(r => <li key={r.id}><a href={r.url}>{r.name}</a></li>)}
            </ul>
		</section>
	);
};

export default GitHub
