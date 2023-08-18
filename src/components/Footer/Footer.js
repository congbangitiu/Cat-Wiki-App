import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <p>CatWiki</p>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAAEsCAYAAAAxYlOwAAAAAXNSR0IArs4c6QAAGadJREFUeF7tncu2HEduRYsDy7L+qS8nLbb+qe2Ju/1PFq2BdflPWlqa0CtIppxMVlUiIgEEENh3pCVGxmPjxEkk8lFv/uVf/+3jjT8IQAACCxN4efnL7e3Ly6cV7v/7bMm/vr7eXl8//NnsH//8r7NDpv37G8x8GnsGhgAEDAlspv0f//539VH2Jh/F4DFz9TDTIQQgMJNAM28LA3+2ps3cZxo7Zj5TdYwNAQioEZhh4vcm3wz9WJ5RW+STjjBzD8qMAQEImBFo5ZRm5FtN3Gygzo6boTdj39fcO7voao6Zd+GiMQQgEIlAM/Jf3v8caUrfzKWZ+o/vfjKfI2ZujpgBIAABCwL/8/6/w2Xjz9bZsnTLmjpmbqEy+oQABEwJZDPyDYZllo6Zm0qOziEAAW0CWY18z+Gv7/6mXkvHzLWVRn8QgIAZgRWMfIOjbeiYuZns6BgCENAkEOXRQ801aRo6Zq4ZGfqCAARMCGR4amV04VqGjpmPRoDjIAABNwIrlVfuQfvu+x8us8TMLyOkAwhAwJLAiuWVIy+Np1wwc0sV0jcEIHCZwB+//3a5jwwdXH0OHTPPEGXmCIGiBFauld8L6ZX6OWZedJOwbAhkIFChxLKPw5VyC2aeQdHMEQJFCVQpsezDO5qdY+ZFNwnLhkAGAt5mvn07xft76MdYjDzdgplnUDRzhEBRAh5mfu+HJWZ/VnfkZihmXnSTsGwIZCBgWTOX/IiE5fjP+I/UzjHzDIpmjhAoTEAzOx/5ebdZT9T01s4x88KbhKVDIAOBq2Y6YuBHLlfnMMK5t9SCmY9Q5hgIQMCVQE8NezNvi9/h9P6sQM+NUMzcVZIMBgEIXCXQjP3e731a/orPfs6eht5TasHMryqL4yEAgVIEPEsuPaUWzLyUDFksBCCgQcDT0KWlFsxcI7L0AQEIlCPgZeiYeTlpsWAIQMCbgEf9XFo3JzP3jj7jQQACSxHQfA7+Hhhp3RwzX0pWLAYCEPAmYP2WKGbuHVHGgwAEyhKwzs4ldXMy87LyY+EQgIAWAevsHDPXihT9QAACEDghYJmdY+bIDwIQgIATAcsnWzBzpyAyDAQgAAHLUovkJig1czQIAQhAQImAVakFM1cKEN1AAAIQkBDAzCWUaAMBCEAgOAGrUguZefDAMz0IQGAtApj5WvFkNRCAQFECmHnRwLNsCEBgLQKY+VrxZDUQgEBhAhY3QamZFxYUS4cABOYQwMzncGdUCEAAAqoEMHNVnHQGAQhAwJ8ANXN/5owIAQhAQJ0AZq6OlA4hAAEI+BOwMnPJT8fxbRb/eDMiBCCwKAErM+eriYsKhmVBAAIxCVh9BhczjxlvZgUBCCxKwOJJloYKM19UMCwLAhCISQAzjxkXZgUBCEBATMCqXv7r6+vtx3c/nc6DG6CniGgAAQhA4JyAlZlLXuVvs8PMz2NECwhAAAKnBKxKLJj5KXoaQAACENAh8PLyl9sv73/W6ezQC2ZugpVOIQABCHxLwKrE0kaSPMlCmQVVQgACEFAgYFViwcwVgkMXEIAABCQELEssmLkkArSBAAQgoEDA6q3PNjVpvZwyi0Ig6QICEKhNwLLEgpnX1harhwAEnAhY3vhsS5B8LXFbKs+ZOwWdYSAAgfUIWGblPfVyyizraYsVQQACTgSss3LM3CmQDAMBCNQmYJ2V99TLycxra5HVQwACgwQ8snLMfDA4HAYBCEBASsA6K++9+UlmLo0c7SAAAQh8IeCRlffWyzFz5AkBCECgk4BHVi79hvl+6jya2BlImkMAAnUJWL7tuafaWy8nM6+rSVYOAQh0ErD+Bst+Oj0vC23HkZl3BpTmEIBATQJeWflIvZzMvKYmWTUEINBJwOumZ5vWSL0cM+8MKM0hAIGaBDxuem5kR+rlmHlNXbJqCECgg4BneWW0xIKZdwSUphCAQD0Cnjc9r5RYMPN62mTFEIBABwHP8kqb1miJBTPvCCpNIQCBWgS8yytXSiyYeS1tsloIQEBIwPPplW1Ko0+xbMfznLkwuDSDAARqEPCuk29Ur5RYyMxraJNVQgACHQRmlFeullgw844A0xQCEFifwCwjv1piwczX1yYrhAAEhARmlVfa9K6WWDBzYZBpBgEIrE1gppFrlFgw87X1yeogAAEhAe/nyffT0sjKMXNhoGkGAQisS2BWnXwjOvK523vR4NHEdTXKyiAAgRMCs41c48bntkTMHLlDAAIlCcyukzfoWiUWyiwlJcyiIQCBCEaudeOTzBw9QwACJQlEMXLNrJzMvKSUWTQEahOYXSff6H/3/Q+qgaBmroqTziAAgcgEohi5dlZOZh5ZdcwNAhBQJRDFyLVr5dTMVWVCZxCAQGQCkYzcIisnM4+sPuYGAQioEJjxbfJnE9eulZOZq8iETiAAgcgEojy5sjGyysrJzCOrkLlBAAKXCEQzcqtaOZn5JZlwMAQgEJlARCO3zMrJzCOrkblBAAJDBCIauXVWjpkPSYWDIACBqASiGrl1Vo6ZR1Uk84IABLoJRDVyzS8jPoPCG6DdkuEACEAgGoGoRt44aX2v/Iw5Zn5GiH+HAARCE4hs5F5ZOWWW0BJlchCAwBmByEbucdNzz4fM/Ewt/DsEIBCSQHQj97jpiZmHlCaTggAEpASiG7lneWVjRmYuVQ/tIACBEASiG7nnTU8y8xCSZBIQgEAvgQxG7l1eITPvVRHtIQCBqQQyGPmM8gpmPlWWDA4BCPQQyGDks8ormHmPkmgLAQhMIxDte+SPQHi9HPRofG6ATpMoA0MAAmcEIv1C0LO5ziyvkJmfqYh/hwAEphLAyPvwk5n38aI1BCDgQCCLkc+uk+9DgZk7CJMhIAABOQGMXM5quplvwYpQZxrDxlEQgIA2gSxPrGzrjuZf7pn58awbDYi2QOkPAhA4J4CRnzM6a+Fq5o8CNvuRnjNI/DsEIGBHIJuRNxLfff+DHZDBnl3N/FktDEMfjCCHQSAxgUz18Q1zVK9yNfM/fv/toewotyTekcWm3jLJty8v4lX3thd3fKFh+36I5K/ty9fXD5Km3W0w8m5kTw9wM3PJW1wYum5w6e05gabJe3+P/j88vyZw74QgOUm0k1tj3HNCjMA+uj+5mbn0LDzri2MRxMIcdAnsTRmD1mUr7W1v7s0M298v73+WHh6mXXQjb6DczPxZieUYsag1qTDKYiLfENiXMjBuBKJNIIMnuZi5pMSCoWvLb93+yLjXjW3ElWWpFriYubTEgqFHlPK8OWHa89gz8mcCGcorW6xczLynxLIXUSaQiH+MwPFJD0okYxw5yoZAhvJKCjPPdma0kdMave5NO+KjemtQZhWaBLKUV9zMfKRefgxIy9AbWKvnXTUFUL0vSiPVFbDO+iO+5fmMrnmZRcPMj6WXZuqS51nXkVWslewNmyw7VmyYjQ6BTOUVt8x8tF4uCcn2dprlW2qSeazYhlr2ilFlTRICWe/VmWfmlmZ+rxzTsnbMXSLZ2w3DlnGiVS0CGbPyFiFTM5/9NbS9qVcty2DYtYyI1V4jkDUrNzdz7Xr5tTB9PnpVg6eOraEO+qhOIGtWXtLMH4l1n7lHzuJ5bb263bB+KwKZs3JzMx9989MqWKP9jn4dbnS844szvEgzSpLjICAnkDkrNzPzrJ+4lIdd1vLeSYBH+WTsaAUBTwLZs3ITM18lG/cUEmNBAAJzCWR72/MeLbWnWWY/uTJXCowOAQhkJpDtbU8zMycbzyxj5g6B2gRWKLFcLrOQjdfeBKweAisQWKHEcsnMMfIVZMwaIACBFUosw2ZOWYUNAAEIrEKgrJlj5KtImHVAAAKrlFi6M3OMHPFDAAIrEShp5hj5ShJmLRCAQCNQzsy52YnwIQCBFQmUMnOMfEUJsyYIQKARyP49ln0UT98ApbyC6CEAgVUJlDFzsvJVJcy6IACBUjVzsnIEDwEIrEygTM3c8/c7VxYMa4MABGISKGHmEX/yLaYcmBUEIJCVwCof2Wr8H94AxcyzypN5QwACPQSWf52fEkuPHGgLAQhkJbBKqeVhZo6ZZ5Um84YABHoIrFJquWvmlFh6pEBbCEAgO4EVSi2YeXYVMn8IQOAygRVKLXfNnBLLZW3QAQQgkIjACqWWb8yctz4TKZCpQgACagSyl1q+MXPq5WraoCMIQCARgezfafnGzHmFP5H6mCoEIKBGIHvd/Bszp16upg06ggAEkhHIXGr5yswpsSRTHtOFAARUCSxj5pRYVHVBZxCAQDICmUstX2XmlFiSKY/pQgACqgSWMHMeSVTVBJ1BAAJJCWQttfyZmVMvT6o8pg0BCKgSSG/mlFhU9UBnEIBAUgJZSy2fMnNKLElVx7QhAAF1AqnNnBKLuh7oEAIQSEog63daPmXmlFiSqo5pQwACJgQy1s3f/Oc//vmxZeb8QQACEIDAZwIpzfx/f/3149uXF2IIAQhAAAJfCGSsm7/5+PHjRyIIAQhAAAL/TwAzRw0QgAAEFiCQ8SYomfkCwmMJEICAPoFsdfM31Mz1RUCPEIBAfgLpzJynWfKLjhVAAAL6BLL98tCn58z59K2+EOgRAhDITSDbTVBe58+tN2YPAQgYEUhp5o0Fr/QbKYJuIQCBlASyPdHy1Y9TUG5JqTkmDQEIGBHIdBOUH3Q2EgHdQgAC+QmkNnM+h5tfgKwAAhDQIZDpiZZvMvOGAEPXEQK9QAACuQlkugl618y5IZpbgMweAhDQIbCEmTcU3BDVEQS9QAACOQksY+YYek4BMmsIQECPQJaboA/LLHsUZOh6wqAnCEAgF4GlzJwMPZf4mC0EIKBHYDkzb2h4ykVPIPQEAQjkILCkmW/oefU/hwiZJQQgcJ1Alpugopr5IxwtU2+/H8oPQl8XDD1AAAIxCZQwcy30904GnCC06NIPBCBwhQBmfoXe4djtCmCr27erAf4gAAEIeBDAzB0o702eTN4BOENAoCCBLJ/CvVQzjxhX6vgRo8KcIJCbQIYnWpYz871kMPbcG4jZQyAKAcw8SiT4JaVAkWAqEMhHADMPGDOekQ8YFKYEgeAEMPOgAWrll2bqPBUTNEBMCwLBCGDmwQJynA4fEAseIKYHgSAEMjyeuPQNUIkOMHQJJdpAoDYBzDxJ/DH0JIFimhCYRAAznwR+ZFgMfYQax0CgBgHMPFmcMfRkAWO6EHAikOEt0PI1870W+F67085gGAgkJBA9O8fMD6LiOfSEu4wpQ8CJwF/f/e32+vrBabS+YTDzO7wot/SJiNYQqEIgcrkFM7+jQsotVbYm64RAP4Go5RbM/EEsyc77Rc4REKhCIGK5BTN/oD5q51W2JeuEQD+BiOUWzPxJHP/4/bf+KHMEBCBQgkC0cgtm/kR2ZOcl9iSLhMAwgUjlFsz8SRi5ETqscQ6EQAkCkcotmPmJ5Ci1lNiTLBICwwSilFsw85MQ8lTLsMY5EAJlCEQot2DmJ3Kjbl5mP7JQCAwTiFBuwcxPwkfdfFjfHAiBUgRml1swc4HcqJsLINEEAhC4zSy3YOYCAWLmAkg0gQAEbjPLLZi5QIDcBBVAogkEIPCJwKxyC2YuECA3QQWQaAIBCPxJYEa5BTMXCBAzF0AaaNIuST2+Dd3ixx8EPAnMKLdg5oIIY+YCSIcmR6P2Mu6embYnld6+vHx1yL3/19MnbSGwEfAut2DmAu1h5gJIuybfff9D3wHBWx8zezL94AELND3PcgtmLgg8Zi6A9KXJjMtL+exsWu7NHaO3YZy1V8/9gJkLVIKZCyB9aeJ9aSmfmX/LfcmG8o0//ygjeu0JzFwQccxcAAkzF0PaGzuZvBhb6oYe5RbMXCARzFwA6UuT1erl8pVfa4nBX+MX/WiPcgtmLlABZi6AhJnLIQlbYvBCUEmaWZdbMHOBEDBzAaSJb77JZrdGq83gqcHnjKdluQUzF2gCMxdAwsxlkAxabXV36u8GcJW7tCy3YOaCYGHmAki329QvxslmWKMV5h47zlblFsxcEHc+tCWAdLvduPkp4+TdCnP3Jn4+nkW5BTM/537jE7jnkCwvH89Hp0UPAcy9h5ZNW4v9gpmfxIoSi0zMVpeOstFpdYVA0zg3VK8QHDtWe89g5idxICuXCVVbmLJRaaVNYDN1bqZqk73fn2a5BTN/EjOycrmgqZfLWWVoifZ9oqRZbsHMn8SMG59yQWPmclZZWnJV6hMpratazPxBvNrl5i/vf/aJZvJRtMSYHMNy0yc79wupRrkFM38QL7JyuZAxczmrbC3ZBz4R0yi3YOZ3YkVW3idgjayib0RaexFgL3iRvv5D0Jj5nViRjfQJmHp5H69srdkPfhG7khhh5oc4kYn0CVfj8rBvRFp7E2BP+BG/UrLEzA9x4qZPn3CviK9vJFrPJEB27kd/9EoXMz/EiMex+kSLmffxytyaveETvdFSC2a+iw9Zeb9YR7OI/pE4YjYB9odPBEYTJMx8Fx8yj36xYub9zDIfwR7xid7IvsLMv8SGrKNfpNz87GeW/Qj2iU8EMfMLnKNnHK2O1jbS25eXC6vUPXT0clB3FvTmTYCbofbER/YWmfnt9skkI38lbn9DJNJJZ/RGjf1WYARLAjyqaEn3c98jV72Y+e0W+scnjoYZ6cQzcilovw0YwYMA2bk95d79Vd7MI4vyUeYbJTvvFZu9/BnBiwDZuT3p3lJLaTOPKsizS6wI2Xmv0OylzwjeBLwToaa5yOVQbf5nPnAcr7SZe4tREmxpAGdn55i5JJrrt/HU4XYlWOln7nqufsuaecSsXGrkzSJmn4h6RLa+pdVdoddV4r29UeEn7noeMihr5rPN8Lj9e4LWjp19MsLM6xr4ceUe2fnZlWDbD9Ee3dVQyNm692OUNPPZRnjVyLfjZ52Qeq4gNARNH7EJeGTnPcmOx3w8IyJNnEqauUcmIQ12j0iPfc4SbU+2IOVAu9wErBMLqaHtKa5ShpF6RDkzn2WAx63asttmiq+vHy7t4hknJqm4Li2Mg1MRsLza1bgSzFyGkSZP5cx8hvndM/If3/2kslmtM6J7kxzJklQWSyehCVhpUWpmUjjZnoaRnsxKmbmV2KQiau2kgZH2aZkRPZoDZi6NTq12Vlq01FsWY5cwKGPmVkLr2a5W5QnPqw3tLKmHH23jE7BImCRGpkEmsrFL9l0ZM7cQWY+ArIy8zcHzPoBEVD1caLseAc3kYpbeohm75Iq+hJl7mp3Vjc5nW95zfV5Z0noWV2NF2lqcZeb7aEUx9rO9t7yZzyyvSM6mWltcMxt6NqczQWmth35yEtA282h6m/m449mJbXkzn1Ve8TTytu091um9ppx2VnvW2jqMZubHjN3zw1+lzVw7S5BuU8v6+KM5eKz1TExSPrRbl4DmFWIWvXnsvU0xz05uy2bms8orM4x8C7TmRrpnN1k217pWGX9lmhrMpjftq5J70X7mL8uauQfYPewIJQjNjXRPSJEveePb3Poz1M5QM+rNOol8doJb0swrGnmzCu3NdLSfjJtrfQuNs0JN/UVIjkbJWn864NE+XM7Mrc+MxwBHuhTU3EyR1zm6yTjOloBmEhVpX41S0+Sxn0MJM/c28pn18UcCsyq1rLC5Rjclx8kIaGov4t6SUfi6lYWhP9qLy2Tmnkau9cXDEXGcHaO5ofZjrbK5zvjx7+MENLW3UklP29AflaCWMXNtYI8kHb2WZ1VqWWlzjdsVRz4ioKm76HtsRAXa/nRvPy5h5tqgHgUrQ3aquak2DiturpENyTGPCWjqbtWSnqZP3WOU3sw1AT3brBmMvM3foty06ubCnPUIaO7DLHutl57m3lzKzDXBPAtKxqxUs3bZ2GDmvdu2XntNza1c0tP0rSOnlJm55iXds22X1cQ0N1bjs/Lmqme7NivW0lzG5KmXqJZ/Ha9gUpm556coM1/qaV7yYua9W7Veey1zqnQVqLFHj8lmaDPfvkjm+WWyyI8dSm2CzSUlRTsNApp6q3IVqFFuOV7FhDRzTXH0iHWVSzxNfllLTT1xp+01AhpZ5jaDKmbe1quxT/e8Qpm59TcNVnha5WzbaZzx92NkLjedseLfxwlY/EhDxcTh6r2GPbMwZq5tQlKZrlBW2daqcaY/cquUKUk1U7mdZcJV0cyv+t6+mhDGzDUv1aSbbZWySluvBb+V+Eg1QbvHBCw0th+tWuKgdWLcuIUw86tnp5ENuEr5QEsQ9xhWzJRGtFThGGsjbwwrmbmm521eFsLMPYSy33CrmJSmIDDzCpY8tkaP/bnKnpQQ1t63G7sQZn71JoAE4NZmpdKBNbdKmVKPhiq1tbgPUz1xsNi3ba9ON3Pts9SzjbaSkXtkS5h5Jdu+v1YL47k3UhWtWe3bEGbudeZfycg9ToAr8cKSxwl4mHmVEoul1zWGJTLz1YzJ6uy+4n2FcRvjSEvzaXSrmPimJMsTY/O46WbeFmq9yB/f/bTUzrTk1UCt9Oz9UoF3XoyVmVcz8RY2K5Z7SYQwc6tMc7WMfAucFa+2yRqz19cPzrbBcFEJaCUOm66axir+lTFzi4WufPbXrJlX32QVjaVnzVfNnAThM20Lj9vHMUyZRbPUUqlEMJqhbwZOFt5jazXbjpgQCcK3WtFMwI73tjbeIcosbXIai105G39mJWefCt5f2la9zK1pxTqrlhj6piv09Zj51be198nXPc5hzPyKoVfKxnW2J71AoJ/A9qXE7Uiu7PoZbkdIf6Oh5+QYysx7b/BVzcTHJcSREIDAqgRCmvnZ2avnbLVq4FgXBCAAgT2B/wMbA+vg9DRloQAAAABJRU5ErkJggg=="
                        alt="logo"
                    />
                </div>
                <div className={cx('copyright')}>
                    <p className={cx('icon')}>©</p>
                    <p className={cx('text')}>
                        created by <p> Cong Bang </p> <p>- devChallenge.io 2023</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
