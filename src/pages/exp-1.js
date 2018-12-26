import React from 'react'
import { navigate } from 'gatsby'

import Layout from 'components/layout'

import styles from 'styles/pages/exp-1.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__title} onClick={() => navigate('/')}><h1>Responsive Aspect Ratios</h1></div>
      </header>
      <section className={styles.description}>
        <div className={styles.description__text} onClick={() => navigate('/')}><p>Build a responsive grid that respects aspect ratios. Every 3rd pixel has a 2:1 ratio for tablet and desktop widths. Every 5th pixel has a blue background. Every 7th pixel has a dark blue background and is aligned to the right of the grid.</p></div>
      </section>
      <section className={styles.grid}>
        <div className={styles.grid__pixel}>1</div>
        <div className={styles.grid__pixel}>2</div>
        <div className={styles.grid__pixel}>3</div>
        <div className={styles.grid__pixel}>4</div>
        <div className={styles.grid__pixel}>5</div>
        <div className={styles.grid__pixel}>6</div>
        <div className={styles.grid__pixel}>7</div>
        <div className={styles.grid__pixel}>8</div>
        <div className={styles.grid__pixel}>9</div>
        <div className={styles.grid__pixel}>10</div>
        <div className={styles.grid__pixel}>11</div>
        <div className={styles.grid__pixel}>12</div>
        <div className={styles.grid__pixel}>13</div>
        <div className={styles.grid__pixel}>14</div>
        <div className={styles.grid__pixel}>15</div>
        <div className={styles.grid__pixel}>16</div>
        <div className={styles.grid__pixel}>17</div>
        <div className={styles.grid__pixel}>18</div>
        <div className={styles.grid__pixel}>19</div>
        <div className={styles.grid__pixel}>20</div>
        <div className={styles.grid__pixel}>21</div>
        <div className={styles.grid__pixel}>22</div>
        <div className={styles.grid__pixel}>23</div>
        <div className={styles.grid__pixel}>24</div>
        <div className={styles.grid__pixel}>25</div>
        <div className={styles.grid__pixel}>26</div>
        <div className={styles.grid__pixel}>27</div>
        <div className={styles.grid__pixel}>28</div>
        <div className={styles.grid__pixel}>29</div>
        <div className={styles.grid__pixel}>30</div>
        <div className={styles.grid__pixel}>31</div>
        <div className={styles.grid__pixel}>32</div>
        <div className={styles.grid__pixel}>33</div>
        <div className={styles.grid__pixel}>34</div>
        <div className={styles.grid__pixel}>35</div>
        <div className={styles.grid__pixel}>36</div>
        <div className={styles.grid__pixel}>37</div>
        <div className={styles.grid__pixel}>38</div>
        <div className={styles.grid__pixel}>39</div>
        <div className={styles.grid__pixel}>40</div>
        <div className={styles.grid__pixel}>41</div>
        <div className={styles.grid__pixel}>42</div>
        <div className={styles.grid__pixel}>43</div>
        <div className={styles.grid__pixel}>44</div>
        <div className={styles.grid__pixel}>45</div>
        <div className={styles.grid__pixel}>46</div>
        <div className={styles.grid__pixel}>47</div>
        <div className={styles.grid__pixel}>48</div>
        <div className={styles.grid__pixel}>49</div>
        <div className={styles.grid__pixel}>50</div>
        <div className={styles.grid__pixel}>51</div>
        <div className={styles.grid__pixel}>52</div>
        <div className={styles.grid__pixel}>53</div>
        <div className={styles.grid__pixel}>54</div>
        <div className={styles.grid__pixel}>55</div>
        <div className={styles.grid__pixel}>56</div>
        <div className={styles.grid__pixel}>57</div>
        <div className={styles.grid__pixel}>58</div>
        <div className={styles.grid__pixel}>59</div>
        <div className={styles.grid__pixel}>60</div>
        <div className={styles.grid__pixel}>61</div>
        <div className={styles.grid__pixel}>62</div>
        <div className={styles.grid__pixel}>63</div>
        <div className={styles.grid__pixel}>64</div>
        <div className={styles.grid__pixel}>65</div>
        <div className={styles.grid__pixel}>66</div>
        <div className={styles.grid__pixel}>67</div>
        <div className={styles.grid__pixel}>68</div>
        <div className={styles.grid__pixel}>69</div>
        <div className={styles.grid__pixel}>70</div>
        <div className={styles.grid__pixel}>71</div>
        <div className={styles.grid__pixel}>72</div>
        <div className={styles.grid__pixel}>73</div>
        <div className={styles.grid__pixel}>74</div>
        <div className={styles.grid__pixel}>75</div>
        <div className={styles.grid__pixel}>76</div>
        <div className={styles.grid__pixel}>77</div>
        <div className={styles.grid__pixel}>78</div>
        <div className={styles.grid__pixel}>79</div>
        <div className={styles.grid__pixel}>80</div>
        <div className={styles.grid__pixel}>81</div>
        <div className={styles.grid__pixel}>82</div>
        <div className={styles.grid__pixel}>83</div>
        <div className={styles.grid__pixel}>84</div>
        <div className={styles.grid__pixel}>85</div>
        <div className={styles.grid__pixel}>86</div>
        <div className={styles.grid__pixel}>87</div>
        <div className={styles.grid__pixel}>88</div>
        <div className={styles.grid__pixel}>89</div>
        <div className={styles.grid__pixel}>90</div>
        <div className={styles.grid__pixel}>91</div>
        <div className={styles.grid__pixel}>92</div>
        <div className={styles.grid__pixel}>93</div>
        <div className={styles.grid__pixel}>94</div>
        <div className={styles.grid__pixel}>95</div>
        <div className={styles.grid__pixel}>96</div>
        <div className={styles.grid__pixel}>97</div>
        <div className={styles.grid__pixel}>98</div>
        <div className={styles.grid__pixel}>99</div>
        <div className={styles.grid__pixel}>100</div>
        <div className={styles.grid__pixel}>101</div>
        <div className={styles.grid__pixel}>102</div>
        <div className={styles.grid__pixel}>103</div>
        <div className={styles.grid__pixel}>104</div>
        <div className={styles.grid__pixel}>105</div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
