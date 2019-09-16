var M6mm = require('./green_slide');
var slide = require('./green');
var genMoves = require('./track');

var W5Y = M6mm.M6mm;


function get_tt(K3f, c3f, w3f) {
    var e7B = W5Y.X5Y()[1][32][36];
    for (; e7B !== W5Y.X5Y()[25][10][9];) {
        switch (e7B) {
            case W5Y.X5Y()[1][9][3]:
                var A3f, d3f = 0, r3f = K3f, n3f = c3f[0], G3f = c3f[2], x3f = c3f[4];
                e7B = W5Y.p5Y()[26][29][6];
                break;
            case W5Y.X5Y()[24][3][36]:
                var Q5A = 5;
                var b5A = 1;
                e7B = W5Y.p5Y()[35][0][21];
                break;
            case W5Y.X5Y()[34][25][21]:
                e7B = (!c3f || !w3f) && b5A * (b5A + 1) * b5A % 2 == 0 ? W5Y.p5Y()[32][21][30] : W5Y.p5Y()[27][22][3];
                break;
            case W5Y.X5Y()[12][28][2][28]:
                e7B = Q5A * (Q5A + 1) % 2 + 1 && (A3f = w3f[W5Y.R0A(1542)](d3f, 2)) ? W5Y.p5Y()[35][36][15] : W5Y.p5Y()[31][25][27];
                break;
            case W5Y.p5Y()[0][2][30]:
                return K3f;
                break;
            case W5Y.X5Y()[14][22][3]:
                Q5A = Q5A > 56424 ? Q5A / 9 : Q5A * 9;
                e7B = W5Y.p5Y()[15][31][6];
                break;
            case W5Y.X5Y()[5][6][15]:
                d3f += 2;
                var k3f = parseInt(A3f, 16)
                    , Y3f = String[W5Y.R0A(84)](k3f)
                    , P3f = (n3f * k3f * k3f + G3f * k3f + x3f) % K3f[W5Y.R0A(249)];
                r3f = r3f[W5Y.a0A(1542)](0, P3f) + Y3f + r3f[W5Y.a0A(1542)](P3f);
                e7B = W5Y.X5Y()[29][37][3];
                break;
            case W5Y.p5Y()[20][27][27]:
                return r3f;
                break;
        }
    }
}

// c 和 s 有参与 tt

//s 获取

var R6 = {
    '\x51\x64': {
        '\x52\x64': W5Y.R0A(1334),
        '\x53\x64': W5Y.a0A(1001),
        '\x54\x64': 7274496,
        '\x55\x64': 9483264,
        '\x56\x64': 19220,
        '\x57\x64': 235,
        '\x58\x64': 24
    },
    '\x52\x64': W5Y.R0A(1334),
    '\x53\x64': W5Y.R0A(1001),
    '\x54\x64': 7274496,
    '\x55\x64': 9483264,
    '\x56\x64': 19220,
    '\x57\x64': 235,
    '\x58\x64': 24,
    '\x59\x64': function (B7) {
        var L9A = W5Y.p5Y()[6][24][36];
        for (; L9A !== W5Y.p5Y()[28][8][12];) {
            switch (L9A) {
                case W5Y.p5Y()[20][25][36]:
                    var c0A = 1;
                    L9A = W5Y.X5Y()[36][6];
                    break;
                case W5Y.X5Y()[16][7][21]:
                    L9A = c0A * (c0A + 1) % 2 + 2 && b7 < s7 ? W5Y.X5Y()[14][3][30] : W5Y.p5Y()[19][7][15];
                    break;
                case W5Y.p5Y()[23][26][6]:
                    b7 += 1;
                    L9A = W5Y.X5Y()[17][21][21];
                    break;
                case W5Y.p5Y()[25][8]:
                    var l7 = []
                        , b7 = 0
                        , s7 = B7[W5Y.a0A(249)];
                    L9A = W5Y.p5Y()[22][13][21];
                    break;
                case W5Y.p5Y()[15][17][33][33]:
                    l7[W5Y.a0A(1400)](B7[W5Y.R0A(1289)](b7));
                    c0A = c0A > 34157 ? c0A - 8 : c0A + 8;
                    L9A = W5Y.X5Y()[37][27][17][4];
                    break;
                case W5Y.p5Y()[6][20][14][1]:
                    return l7;
                    break;
            }
        }
    },
    '\x5a\x64': function (E7) {
        var I9A = W5Y.p5Y()[38][4][36];
        for (; I9A !== W5Y.X5Y()[20][13][12];) {
            switch (I9A) {
                case W5Y.X5Y()[30][7][6]:
                    i7 += 1;
                    I9A = W5Y.p5Y()[22][13][21];
                    break;
                case W5Y.p5Y()[23][19]:
                    var W7 = W5Y.R0A(794)
                        , i7 = 0
                        , g7 = E7[W5Y.R0A(249)];
                    I9A = W5Y.p5Y()[24][2][21];
                    break;
                case W5Y.X5Y()[20][25][36]:
                    var o2A = 8;
                    I9A = W5Y.X5Y()[26][22];
                    break;
                case W5Y.p5Y()[8][12][21]:
                    I9A = o2A * (o2A + 1) * o2A % 2 == 0 && i7 < g7 ? W5Y.p5Y()[1][16][30] : W5Y.X5Y()[20][21][15];
                    break;
                case W5Y.p5Y()[29][18][30]:
                    W7 += String[W5Y.R0A(84)](E7[i7]);
                    o2A = o2A >= 89585 ? o2A / 5 : o2A * 5;
                    I9A = W5Y.p5Y()[36][13][6];
                    break;
                case W5Y.X5Y()[34][22][15]:
                    return W7;
                    break;
            }
        }
    },
    '\x24\x64': function (O7) {
        var q9A = W5Y.p5Y()[22][14][36];
        for (; q9A !== W5Y.X5Y()[13][28][30];) {
            switch (q9A) {
                case W5Y.X5Y()[30][9][36]:
                    var Z2A = 6;
                    var D7 = this[W5Y.a0A(1449)];
                    return Z2A * (Z2A + 1) * Z2A % 2 == 0 && (O7 < 0 || O7 >= D7[W5Y.R0A(249)]) ? W5Y.a0A(1001) : D7[W5Y.a0A(776)](O7);
                    break;
            }
        }
    },
    '\x5f\x64': function (J7) {
        var z9A = W5Y.p5Y()[20][25][36];
        for (; z9A !== W5Y.X5Y()[32][28];) {
            switch (z9A) {
                case W5Y.p5Y()[35][1][36]:
                    return this[W5Y.R0A(1449)][W5Y.a0A(1372)](J7);
                    break;
            }
        }
    },
    '\x61\x65': function (S7, U7) {
        var b9A = W5Y.X5Y()[16][8][36];
        for (; b9A !== W5Y.X5Y()[9][18];) {
            switch (b9A) {
                case W5Y.X5Y()[9][27][36]:
                    return S7 >> U7 & 1;
                    break;
            }
        }
    },
    '\x62\x65': function (V7, o7) {
        var Q9A = W5Y.X5Y()[17][22][3][3];
        for (; Q9A !== W5Y.X5Y()[23][10][0];) {
            switch (Q9A) {
                case W5Y.X5Y()[24][26][30]:
                    var t7 = function (j7, f7) {
                        var m9A = W5Y.X5Y()[20][25][35][22];
                        for (; m9A !== W5Y.p5Y()[32][35][34][8];) {
                            switch (m9A) {
                                case W5Y.p5Y()[2][30][30]:
                                    F7 -= 1;
                                    m9A = W5Y.p5Y()[4][26];
                                    break;
                                case W5Y.p5Y()[31][0][3]:
                                    return I7;
                                    break;
                                case W5Y.X5Y()[13][5][36]:
                                    var I7 = 0
                                        , F7 = o7[W5Y.a0A(988)] - 1;
                                    m9A = W5Y.p5Y()[30][0];
                                    break;
                                case W5Y.p5Y()[2][37]:
                                    m9A = F7 >= 0 ? W5Y.p5Y()[37][28][21] : W5Y.p5Y()[11][32][3];
                                    break;
                                case W5Y.p5Y()[24][2][21]:
                                    1 === u7[W5Y.R0A(1188)](f7, F7) && (I7 = (I7 << 1) + u7[W5Y.R0A(1188)](j7, F7));
                                    m9A = W5Y.X5Y()[31][7][30];
                                    break;
                            }
                        }
                    }
                        , T7 = W5Y.a0A(794)
                        , z7 = W5Y.a0A(794)
                        , v7 = V7[W5Y.a0A(249)]
                        , X7 = 0;
                    Q9A = W5Y.p5Y()[26][8][3];
                    break;
                case W5Y.X5Y()[15][10][25][38]:
                    Q9A = u2A * (u2A + 1) * u2A % 2 == 0 && X7 < v7 ? W5Y.X5Y()[34][24][6] : W5Y.X5Y()[29][7][21];
                    break;
                case W5Y.p5Y()[34][24][6]:
                    var y7;
                    Q9A = W5Y.p5Y()[9][23][15];
                    break;
                case W5Y.p5Y()[36][15][36]:
                    var u2A = 0;
                    var u7 = this;
                    Q9A = W5Y.p5Y()[19][10][29][16];
                    break;
                case W5Y.X5Y()[2][1][24]:
                    u2A = u2A > 23473 ? u2A - 5 : u2A + 5;
                    Q9A = W5Y.X5Y()[16][11][3];
                    break;
                case W5Y.p5Y()[3][14][9]:
                    2 === q7 ? (y7 = (V7[X7] << 16) + (V7[X7 + 1] << 8),
                        T7 += u7[W5Y.R0A(309)](t7(y7, o7[W5Y.R0A(803)])) + u7[W5Y.R0A(309)](t7(y7, o7[W5Y.a0A(905)])) + u7[W5Y.a0A(309)](t7(y7, o7[W5Y.a0A(656)])),
                        z7 = o7[W5Y.a0A(389)]) : 1 === q7 && (y7 = V7[X7] << 16,
                        T7 += u7[W5Y.R0A(309)](t7(y7, o7[W5Y.a0A(803)])) + u7[W5Y.R0A(309)](t7(y7, o7[W5Y.a0A(905)])),
                        z7 = o7[W5Y.R0A(389)] + o7[W5Y.a0A(389)]);
                    Q9A = W5Y.X5Y()[17][16][24];
                    break;
                case W5Y.p5Y()[36][27][21]:
                    return {
                        '\x72\x65\x73': T7,
                        '\x65\x6e\x64': z7
                    };
                    break;
                case W5Y.p5Y()[32][1][3]:
                    X7 += 3;
                    Q9A = W5Y.X5Y()[6][1][3];
                    break;
                case W5Y.X5Y()[1][31][15][15]:
                    o7 || (o7 = u7);
                    Q9A = W5Y.p5Y()[34][10][30];
                    break;
                case W5Y.X5Y()[9][29][27]:
                    var q7 = v7 % 3;
                    Q9A = W5Y.p5Y()[22][7][8][34];
                    break;
                case W5Y.p5Y()[1][20][12]:
                    y7 = (V7[X7] << 16) + (V7[X7 + 1] << 8) + V7[X7 + 2],
                        T7 += u7[W5Y.a0A(309)](t7(y7, o7[W5Y.a0A(803)])) + u7[W5Y.a0A(309)](t7(y7, o7[W5Y.R0A(905)])) + u7[W5Y.R0A(309)](t7(y7, o7[W5Y.a0A(656)])) + u7[W5Y.R0A(309)](t7(y7, o7[W5Y.R0A(367)]));
                    Q9A = W5Y.p5Y()[13][38][24];
                    break;
                case W5Y.X5Y()[8][9][15]:
                    Q9A = X7 + 2 < v7 ? W5Y.p5Y()[1][20][12] : W5Y.X5Y()[3][23][27];
                    break;
            }
        }
    },
    '\x48\x62': function (N3) {
        var E9A = W5Y.p5Y()[21][0][36];
        for (; E9A !== W5Y.X5Y()[32][36][21];) {
            switch (E9A) {
                case W5Y.X5Y()[22][14][36]:
                    var M3 = this
                        , p3 = M3[W5Y.a0A(896)](M3[W5Y.R0A(366)](N3));
                    return p3[W5Y.a0A(867)] + p3[W5Y.a0A(789)];
                    break;
            }
        }
    },
    '\x63\x65': function (c3) {
        var D9A = W5Y.p5Y()[32][37][16][29];
        for (; D9A !== W5Y.X5Y()[33][11][21];) {
            switch (D9A) {
                case W5Y.p5Y()[20][25][36]:
                    var k3 = this
                        , r3 = k3[W5Y.a0A(896)](c3);
                    return r3[W5Y.R0A(867)] + r3[W5Y.a0A(789)];
                    break;
            }
        }
    },
    '\x64\x65': function (A3, P3) {
        var A9A = W5Y.p5Y()[36][15][36];
        for (; A9A !== W5Y.X5Y()[31][27][18];) {
            switch (A9A) {
                case W5Y.p5Y()[3][37][3]:
                    A9A = H2A * (H2A + 1) * H2A % 2 == 0 && K3 < w3 ? W5Y.X5Y()[25][15][6] : W5Y.X5Y()[38][25][0];
                    break;
                case W5Y.X5Y()[38][25][0]:
                    return n3;
                    break;
                case W5Y.p5Y()[12][26][15]:
                    A9A = (n3 += String[W5Y.R0A(84)](Z3),
                    A3[W5Y.R0A(776)](K3 + 2) !== P3[W5Y.R0A(389)]) ? W5Y.p5Y()[2][34][12] : W5Y.X5Y()[2][0][29][16];
                    break;
                case W5Y.p5Y()[10][0][6]:
                    var x3 = G3(d3[W5Y.R0A(1111)](A3[W5Y.R0A(776)](K3)), P3[W5Y.a0A(803)]) + G3(d3[W5Y.a0A(1111)](A3[W5Y.R0A(776)](K3 + 1)), P3[W5Y.R0A(905)]) + G3(d3[W5Y.R0A(1111)](A3[W5Y.a0A(776)](K3 + 2)), P3[W5Y.a0A(656)]) + G3(d3[W5Y.R0A(1111)](A3[W5Y.a0A(776)](K3 + 3)), P3[W5Y.a0A(367)])
                        , Z3 = x3 >> 16 & 255;
                    A9A = W5Y.p5Y()[32][33][15];
                    break;
                case W5Y.p5Y()[3][9][2][28]:
                    var m3 = x3 >> 8 & 255;
                    A9A = W5Y.X5Y()[19][5][24];
                    break;
                case W5Y.p5Y()[1][34][3][3]:
                    n3 += String[W5Y.R0A(84)](Y3);
                    A9A = W5Y.p5Y()[34][19][13][26];
                    break;
                case W5Y.p5Y()[17][25][3]:
                    var Y3 = 255 & x3;
                    A9A = W5Y.p5Y()[14][21][27];
                    break;
                case W5Y.p5Y()[23][22][24]:
                    A9A = (n3 += String[W5Y.R0A(84)](m3),
                    A3[W5Y.a0A(776)](K3 + 3) !== P3[W5Y.R0A(389)]) ? W5Y.p5Y()[7][2][3] : W5Y.X5Y()[9][20][9];
                    break;
                case W5Y.p5Y()[1][5][21]:
                    K3 += 4;
                    A9A = W5Y.X5Y()[5][26][3];
                    break;
                case W5Y.p5Y()[33][35][30]:
                    var G3 = function (a3, Q3) {
                        var c9A = W5Y.p5Y()[26][31][36];
                        for (; c9A !== W5Y.X5Y()[17][10][12];) {
                            switch (c9A) {
                                case W5Y.p5Y()[1][32][15][15]:
                                    c9A = a3 < 0 ? W5Y.p5Y()[37][20] : W5Y.p5Y()[4][34][21];
                                    break;
                                case W5Y.p5Y()[35][31]:
                                    return 0;
                                    break;
                                case W5Y.p5Y()[29][33][21]:
                                    var e3 = 5
                                        , L3 = 0
                                        , H3 = P3[W5Y.R0A(988)] - 1;
                                    c9A = W5Y.X5Y()[14][3][30];
                                    break;
                                case W5Y.p5Y()[26][15][30]:
                                    c9A = H3 >= 0 ? W5Y.X5Y()[33][28][3] : W5Y.p5Y()[5][6][15];
                                    break;
                                case W5Y.p5Y()[18][34][6]:
                                    H3 -= 1;
                                    c9A = W5Y.p5Y()[32][21][30];
                                    break;
                                case W5Y.X5Y()[30][25][3]:
                                    1 === d3[W5Y.R0A(1188)](Q3, H3) && (L3 += d3[W5Y.a0A(1188)](a3, e3) << H3,
                                        e3 -= 1);
                                    c9A = W5Y.p5Y()[3][19][6];
                                    break;
                                case W5Y.X5Y()[10][37][15]:
                                    return L3;
                                    break;
                            }
                        }
                    }
                        , w3 = A3[W5Y.a0A(249)]
                        , n3 = W5Y.R0A(794)
                        , K3 = 0;
                    A9A = W5Y.X5Y()[35][17][3];
                    break;
                case W5Y.p5Y()[22][7][9]:
                    H2A = H2A > 37328 ? H2A / 6 : H2A * 6;
                    A9A = W5Y.X5Y()[26][4][21];
                    break;
                case W5Y.X5Y()[30][9][36]:
                    var H2A = 7;
                    var d3 = this;
                    P3 || (P3 = d3);
                    A9A = W5Y.p5Y()[25][1][30];
                    break;
            }
        }
    },
    '\x50\x64': function (h3) {
        var o4B = W5Y.X5Y()[20][25][36];
        for (; o4B !== W5Y.X5Y()[0][12][24];) {
            switch (o4B) {
                case W5Y.X5Y()[24][26][30]:
                    var b3 = 0;
                    o4B = W5Y.p5Y()[37][6][3];
                    break;
                case W5Y.p5Y()[25][16][21]:
                    o4B = R3 < 4 && n2A * (n2A + 1) * n2A % 2 == 0 ? W5Y.X5Y()[25][1][30] : W5Y.p5Y()[12][18][12];
                    break;
                case W5Y.X5Y()[12][28][6]:
                    h3 += C3[W5Y.R0A(389)];
                    o4B = W5Y.p5Y()[23][24][15];
                    break;
                case W5Y.p5Y()[10][2][11][37]:
                    var n2A = 7;
                    var C3 = this
                        , R3 = 4 - h3[W5Y.R0A(249)] % 4;
                    o4B = W5Y.p5Y()[14][18][21];
                    break;
                case W5Y.p5Y()[29][30][15]:
                    b3 += 1;
                    o4B = W5Y.p5Y()[31][0][3];
                    break;
                case W5Y.p5Y()[5][26][16][29]:
                    o4B = b3 < R3 ? W5Y.p5Y()[10][0][6] : W5Y.X5Y()[14][7][12];
                    break;
                case W5Y.p5Y()[2][34][7][20]:
                    return C3[W5Y.a0A(868)](h3);
                    break;
            }
        }
    },
    '\x7a\x65': function (l3) {
        var Z4B = W5Y.X5Y()[12][30][36];
        for (; Z4B !== W5Y.p5Y()[9][18][18];) {
            switch (Z4B) {
                case W5Y.p5Y()[7][38][36]:
                    return this[W5Y.a0A(448)](l3);
                    break;
            }
        }
    }
};
var m6 = function (x2) {
    function n2(Q2, h2) {
        return Q2 << h2 | Q2 >>> 32 - h2;
    }

    function c2(l2, B2) {
        var s2, i2, R2, b2, C2;
        return R2 = 2147483648 & l2,
            b2 = 2147483648 & B2,
            s2 = 1073741824 & l2,
            i2 = 1073741824 & B2,
            C2 = (1073741823 & l2) + (1073741823 & B2),
            s2 & i2 ? 2147483648 ^ C2 ^ R2 ^ b2 : s2 | i2 ? 1073741824 & C2 ? 3221225472 ^ C2 ^ R2 ^ b2 : 1073741824 ^ C2 ^ R2 ^ b2 : C2 ^ R2 ^ b2;
    }

    function L2(W2, E2, g2) {
        return W2 & E2 | ~W2 & g2;
    }

    function e2(D2, J2, O2) {
        return D2 & O2 | J2 & ~O2;
    }

    function H2(S2, U2, o2) {
        return S2 ^ U2 ^ o2;
    }

    function a2(u2, y2, t2) {
        return y2 ^ (u2 | ~t2);
    }

    function K2(X2, V2, T2, z2, v2, q2, I2) {
        return X2 = c2(X2, c2(c2(L2(V2, T2, z2), v2), I2)),
            c2(n2(X2, q2), V2);
    }

    function d2(j2, f2, M0, p0, N0, r0, k0) {
        return j2 = c2(j2, c2(c2(e2(f2, M0, p0), N0), k0)),
            c2(n2(j2, r0), f2);
    }

    function A2(c0, P0, K0, d0, A0, n0, G0) {
        return c0 = c2(c0, c2(c2(H2(P0, K0, d0), A0), G0)),
            c2(n2(c0, n0), P0);
    }

    function P2(x0, w0, Y0, Z0, m0, H0, e0) {
        return x0 = c2(x0, c2(c2(a2(w0, Y0, Z0), m0), e0)),
            c2(n2(x0, H0), w0);
    }

    function G2(C0) {
        var h0, L0, Q0 = "", a0 = "";
        for (L0 = 0; L0 <= 3; L0++)
            h0 = C0 >>> 8 * L0 & 255,
                a0 = "0" + h0.toString(16),
                Q0 += a0.substr(a0.length - 2, 2);
        return Q0;
    }

    var k2, w2, Y2, Z2, m2, N2, p2, M2, f4, r2 = [];
    for (x2 = function (l0) {
        l0 = l0.replace(/\r\n/g, "\n");
        for (var b0 = "", B0 = 0; B0 < l0.length; B0++) {
            var R0 = l0.charCodeAt(B0);
            R0 < 128 ? b0 += String.fromCharCode(R0) : R0 > 127 && R0 < 2048 ? (b0 += String.fromCharCode(R0 >> 6 | 192),
                b0 += String.fromCharCode(63 & R0 | 128)) : (b0 += String.fromCharCode(R0 >> 12 | 224),
                b0 += String.fromCharCode(R0 >> 6 & 63 | 128),
                b0 += String.fromCharCode(63 & R0 | 128));
        }
        return b0;
    }(x2),
             r2 = function (J0) {
                 for (var W0, E0 = J0.length, D0 = E0 + 8, S0 = (D0 - D0 % 64) / 64, O0 = 16 * (S0 + 1), i0 = Array(O0 - 1), g0 = 0, s0 = 0; s0 < E0;)
                     W0 = (s0 - s0 % 4) / 4,
                         g0 = s0 % 4 * 8,
                         i0[W0] = i0[W0] | J0.charCodeAt(s0) << g0,
                         s0++;
                 return W0 = (s0 - s0 % 4) / 4,
                     g0 = s0 % 4 * 8,
                     i0[W0] = i0[W0] | 128 << g0,
                     i0[O0 - 2] = E0 << 3,
                     i0[O0 - 1] = E0 >>> 29,
                     i0;
             }(x2),
             N2 = 1732584193,
             p2 = 4023233417,
             M2 = 2562383102,
             f4 = 271733878,
             k2 = 0; k2 < r2.length; k2 += 16)
        w2 = N2,
            Y2 = p2,
            Z2 = M2,
            m2 = f4,
            N2 = K2(N2, p2, M2, f4, r2[k2 + 0], 7, 3614090360),
            f4 = K2(f4, N2, p2, M2, r2[k2 + 1], 12, 3905402710),
            M2 = K2(M2, f4, N2, p2, r2[k2 + 2], 17, 606105819),
            p2 = K2(p2, M2, f4, N2, r2[k2 + 3], 22, 3250441966),
            N2 = K2(N2, p2, M2, f4, r2[k2 + 4], 7, 4118548399),
            f4 = K2(f4, N2, p2, M2, r2[k2 + 5], 12, 1200080426),
            M2 = K2(M2, f4, N2, p2, r2[k2 + 6], 17, 2821735955),
            p2 = K2(p2, M2, f4, N2, r2[k2 + 7], 22, 4249261313),
            N2 = K2(N2, p2, M2, f4, r2[k2 + 8], 7, 1770035416),
            f4 = K2(f4, N2, p2, M2, r2[k2 + 9], 12, 2336552879),
            M2 = K2(M2, f4, N2, p2, r2[k2 + 10], 17, 4294925233),
            p2 = K2(p2, M2, f4, N2, r2[k2 + 11], 22, 2304563134),
            N2 = K2(N2, p2, M2, f4, r2[k2 + 12], 7, 1804603682),
            f4 = K2(f4, N2, p2, M2, r2[k2 + 13], 12, 4254626195),
            M2 = K2(M2, f4, N2, p2, r2[k2 + 14], 17, 2792965006),
            p2 = K2(p2, M2, f4, N2, r2[k2 + 15], 22, 1236535329),
            N2 = d2(N2, p2, M2, f4, r2[k2 + 1], 5, 4129170786),
            f4 = d2(f4, N2, p2, M2, r2[k2 + 6], 9, 3225465664),
            M2 = d2(M2, f4, N2, p2, r2[k2 + 11], 14, 643717713),
            p2 = d2(p2, M2, f4, N2, r2[k2 + 0], 20, 3921069994),
            N2 = d2(N2, p2, M2, f4, r2[k2 + 5], 5, 3593408605),
            f4 = d2(f4, N2, p2, M2, r2[k2 + 10], 9, 38016083),
            M2 = d2(M2, f4, N2, p2, r2[k2 + 15], 14, 3634488961),
            p2 = d2(p2, M2, f4, N2, r2[k2 + 4], 20, 3889429448),
            N2 = d2(N2, p2, M2, f4, r2[k2 + 9], 5, 568446438),
            f4 = d2(f4, N2, p2, M2, r2[k2 + 14], 9, 3275163606),
            M2 = d2(M2, f4, N2, p2, r2[k2 + 3], 14, 4107603335),
            p2 = d2(p2, M2, f4, N2, r2[k2 + 8], 20, 1163531501),
            N2 = d2(N2, p2, M2, f4, r2[k2 + 13], 5, 2850285829),
            f4 = d2(f4, N2, p2, M2, r2[k2 + 2], 9, 4243563512),
            M2 = d2(M2, f4, N2, p2, r2[k2 + 7], 14, 1735328473),
            p2 = d2(p2, M2, f4, N2, r2[k2 + 12], 20, 2368359562),
            N2 = A2(N2, p2, M2, f4, r2[k2 + 5], 4, 4294588738),
            f4 = A2(f4, N2, p2, M2, r2[k2 + 8], 11, 2272392833),
            M2 = A2(M2, f4, N2, p2, r2[k2 + 11], 16, 1839030562),
            p2 = A2(p2, M2, f4, N2, r2[k2 + 14], 23, 4259657740),
            N2 = A2(N2, p2, M2, f4, r2[k2 + 1], 4, 2763975236),
            f4 = A2(f4, N2, p2, M2, r2[k2 + 4], 11, 1272893353),
            M2 = A2(M2, f4, N2, p2, r2[k2 + 7], 16, 4139469664),
            p2 = A2(p2, M2, f4, N2, r2[k2 + 10], 23, 3200236656),
            N2 = A2(N2, p2, M2, f4, r2[k2 + 13], 4, 681279174),
            f4 = A2(f4, N2, p2, M2, r2[k2 + 0], 11, 3936430074),
            M2 = A2(M2, f4, N2, p2, r2[k2 + 3], 16, 3572445317),
            p2 = A2(p2, M2, f4, N2, r2[k2 + 6], 23, 76029189),
            N2 = A2(N2, p2, M2, f4, r2[k2 + 9], 4, 3654602809),
            f4 = A2(f4, N2, p2, M2, r2[k2 + 12], 11, 3873151461),
            M2 = A2(M2, f4, N2, p2, r2[k2 + 15], 16, 530742520),
            p2 = A2(p2, M2, f4, N2, r2[k2 + 2], 23, 3299628645),
            N2 = P2(N2, p2, M2, f4, r2[k2 + 0], 6, 4096336452),
            f4 = P2(f4, N2, p2, M2, r2[k2 + 7], 10, 1126891415),
            M2 = P2(M2, f4, N2, p2, r2[k2 + 14], 15, 2878612391),
            p2 = P2(p2, M2, f4, N2, r2[k2 + 5], 21, 4237533241),
            N2 = P2(N2, p2, M2, f4, r2[k2 + 12], 6, 1700485571),
            f4 = P2(f4, N2, p2, M2, r2[k2 + 3], 10, 2399980690),
            M2 = P2(M2, f4, N2, p2, r2[k2 + 10], 15, 4293915773),
            p2 = P2(p2, M2, f4, N2, r2[k2 + 1], 21, 2240044497),
            N2 = P2(N2, p2, M2, f4, r2[k2 + 8], 6, 1873313359),
            f4 = P2(f4, N2, p2, M2, r2[k2 + 15], 10, 4264355552),
            M2 = P2(M2, f4, N2, p2, r2[k2 + 6], 15, 2734768916),
            p2 = P2(p2, M2, f4, N2, r2[k2 + 13], 21, 1309151649),
            N2 = P2(N2, p2, M2, f4, r2[k2 + 4], 6, 4149444226),
            f4 = P2(f4, N2, p2, M2, r2[k2 + 11], 10, 3174756917),
            M2 = P2(M2, f4, N2, p2, r2[k2 + 2], 15, 718787259),
            p2 = P2(p2, M2, f4, N2, r2[k2 + 9], 21, 3951481745),
            N2 = c2(N2, w2),
            p2 = c2(p2, Y2),
            M2 = c2(M2, Z2),
            f4 = c2(f4, m2);
    return (G2(N2) + G2(p2) + G2(M2) + G2(f4)).toLowerCase();
};

// s: m6(R6[W5Y.a0A(1310)](V4Z))

// console.log(m6(R6[W5Y.a0A(1310)](V4Z)));



// 获取q4Z

// console.log(JSON.stringify(t4Z));

var i5 = function () {
    function C6f() {
        var b0B = W5Y.p5Y()[8][13][36];
        for (; b0B !== W5Y.p5Y()[29][25][18];) {
            switch (b0B) {
                case W5Y.p5Y()[20][25][36]:
                    return (65536 * (1 + Math[W5Y.a0A(1037)]()) | 0)[W5Y.a0A(560)](16)[W5Y.a0A(248)](1);
                    break;
            }
        }
    }

    var z0B = W5Y.X5Y()[17][22][36];
    for (; z0B !== W5Y.p5Y()[12][21][6][6];) {
        switch (z0B) {
            case W5Y.p5Y()[0][18][36]:
                return function () {
                    var Q0B = W5Y.X5Y()[26][31][36];
                    for (; Q0B !== W5Y.p5Y()[22][5][18];) {
                        switch (Q0B) {
                            case W5Y.p5Y()[20][25][36]:
                                return C6f() + C6f() + C6f() + C6f();
                                break;
                        }
                    }
                }
                    ;
                break;
        }
    }
}();


function get_one() {
    var D6B = W5Y.p5Y()[11][16][36];
    for (; D6B !== W5Y.X5Y()[3][20][21];) {
        switch (D6B) {
            case W5Y.p5Y()[28][20][36]:
                var R2Z = this;
                return i5();
                break;
        }
    }
}

// console.log(get_one());

var N5 = function () {
    var r3m = Object[W5Y.R0A(1454)] || function () {
        function K3m() {
        }

        return function (A3m) {
            var d3m;
            return K3m[W5Y.a0A(183)] = A3m,
                d3m = new K3m(),
                K3m[W5Y.R0A(183)] = null,
                d3m;
        }
            ;
    }()
        , E7m = {}
        , i7m = E7m[W5Y.R0A(862)] = {}
        , W7m = i7m[W5Y.a0A(188)] = function () {
        return {
            '\x65\x78\x74\x65\x6e\x64': function (G3m) {
                var n3m = r3m(this);
                return G3m && n3m[W5Y.R0A(193)](G3m),
                n3m[W5Y.a0A(742)](W5Y.R0A(592)) && this[W5Y.R0A(592)] !== n3m[W5Y.R0A(592)] || (n3m[W5Y.a0A(592)] = function () {
                        n3m[W5Y.R0A(625)][W5Y.a0A(592)][W5Y.a0A(364)](this, arguments);
                    }
                ),
                    n3m[W5Y.R0A(592)][W5Y.R0A(183)] = n3m,
                    n3m[W5Y.a0A(625)] = this,
                    n3m;
            },
            '\x63\x72\x65\x61\x74\x65': function () {
                var x3m = this[W5Y.R0A(1462)]();
                return x3m[W5Y.a0A(592)][W5Y.a0A(364)](x3m, arguments),
                    x3m;
            },
            '\x69\x6e\x69\x74': function () {
            },
            '\x6d\x69\x78\x49\x6e': function (w3m) {
                for (var Y3m in w3m)
                    w3m[W5Y.R0A(742)](Y3m) && (this[Y3m] = w3m[Y3m]);
                w3m[W5Y.a0A(742)](W5Y.a0A(560)) && (this[W5Y.a0A(560)] = w3m[W5Y.a0A(560)]);
            }
        };
    }()
        , g7m = i7m[W5Y.R0A(779)] = W7m[W5Y.a0A(1462)]({
        '\x69\x6e\x69\x74': function (Z3m, m3m) {
            var s7A = 3;
            Z3m = this[W5Y.a0A(474)] = Z3m || [],
                m3m != undefined && s7A * (s7A + 1) % 2 + 6 ? this[W5Y.R0A(1202)] = m3m : this[W5Y.a0A(1202)] = 4 * Z3m[W5Y.R0A(249)];
        },
        '\x63\x6f\x6e\x63\x61\x74': function (h3m) {
            var p7A = 7;
            var V7A = 8;
            var a3m = this[W5Y.R0A(474)]
                , Q3m = h3m[W5Y.a0A(474)]
                , e3m = this[W5Y.R0A(1202)]
                , L3m = h3m[W5Y.a0A(1202)];
            if (p7A * (p7A + 1) % 2 + 2 && (this[W5Y.R0A(162)](),
            e3m % 4))
                for (var H3m = 0; H3m < L3m; H3m++) {
                    var C3m = Q3m[H3m >>> 2] >>> 24 - H3m % 4 * 8 & 255;
                    a3m[e3m + H3m >>> 2] |= C3m << 24 - (e3m + H3m) % 4 * 8;
                }
            else if (V7A * (V7A + 1) % 2 + 6)
                for (var H3m = 0; H3m < L3m; H3m += 4)
                    a3m[e3m + H3m >>> 2] = Q3m[H3m >>> 2];
            return this[W5Y.R0A(1202)] += L3m,
                this;
        },
        '\x63\x6c\x61\x6d\x70': function () {
            var b3m = this[W5Y.a0A(474)]
                , R3m = this[W5Y.R0A(1202)];
            b3m[R3m >>> 2] &= 4294967295 << 32 - R3m % 4 * 8,
                b3m[W5Y.R0A(249)] = Math[W5Y.R0A(422)](R3m / 4);
        }
    })
        , S7m = E7m[W5Y.a0A(1160)] = {}
        , O7m = S7m[W5Y.a0A(1525)] = {
        '\x70\x61\x72\x73\x65': function (i3m) {
            var G7A = 6;
            for (var B3m = i3m[W5Y.R0A(249)], s3m = [], l3m = 0; l3m < B3m && G7A * (G7A + 1) % 2 + 5; l3m++) {
                s3m[l3m >>> 2] |= (255 & i3m[W5Y.a0A(1289)](l3m)) << 24 - l3m % 4 * 8;
                G7A = G7A > 73384 ? G7A / 2 : G7A * 2;
            }
            return new g7m[(W5Y.R0A(592))](s3m, B3m);
        }
    }
        , j7m = S7m[W5Y.a0A(530)] = {
        '\x70\x61\x72\x73\x65': function (W3m) {
            return O7m[W5Y.a0A(156)](unescape(encodeURIComponent(W3m)));
        }
    }
        , o7m = i7m[W5Y.a0A(945)] = W7m[W5Y.a0A(1462)]({
        '\x72\x65\x73\x65\x74': function () {
            this[W5Y.a0A(273)] = new g7m[(W5Y.a0A(592))](),
                this[W5Y.R0A(1296)] = 0;
        },
        '\x61\x66': function (E3m) {
            W5Y.a0A(1150) == typeof E3m && (E3m = j7m[W5Y.a0A(156)](E3m)),
                this[W5Y.R0A(273)][W5Y.a0A(139)](E3m),
                this[W5Y.a0A(1296)] += E3m[W5Y.a0A(1202)];
        },
        '\x62\x66': function (X3m) {
            var e7A = 7;
            var B7A = 6;
            var D3m = this[W5Y.a0A(273)]
                , U3m = D3m[W5Y.a0A(474)]
                , o3m = D3m[W5Y.a0A(1202)]
                , J3m = this[W5Y.a0A(344)]
                , y3m = 4 * J3m
                , g3m = o3m / y3m;
            g3m = X3m && B7A * (B7A + 1) * B7A % 2 == 0 ? Math[W5Y.R0A(422)](g3m) : Math[W5Y.a0A(65)]((0 | g3m) - this[W5Y.R0A(221)], 0);
            var O3m = g3m * J3m
                , u3m = Math[W5Y.a0A(1039)](4 * O3m, o3m);
            if (e7A * (e7A + 1) * e7A % 2 == 0 && O3m) {
                for (var S3m = 0; S3m < O3m; S3m += J3m)
                    this[W5Y.R0A(1072)](U3m, S3m);
                var t3m = U3m[W5Y.a0A(1024)](0, O3m);
                D3m[W5Y.a0A(1202)] -= u3m;
            }
            return new g7m[(W5Y.R0A(592))](t3m, u3m);
        },
        '\x63\x66': 0
    })
        , F7m = E7m[W5Y.a0A(22)] = {}
        , D7m = i7m[W5Y.R0A(995)] = o7m[W5Y.a0A(1462)]({
        '\x63\x66\x67': W7m[W5Y.R0A(1462)](),
        '\x63\x72\x65\x61\x74\x65\x45\x6e\x63\x72\x79\x70\x74\x6f\x72': function (V3m, T3m) {
            return this[W5Y.a0A(1454)](this[W5Y.R0A(543)], V3m, T3m);
        },
        '\x69\x6e\x69\x74': function (z3m, v3m, q3m) {
            this[W5Y.R0A(1166)] = this[W5Y.a0A(1166)][W5Y.R0A(1462)](q3m),
                this[W5Y.R0A(1528)] = z3m,
                this[W5Y.a0A(1135)] = v3m,
                this[W5Y.R0A(316)]();
        },
        '\x72\x65\x73\x65\x74': function () {
            o7m[W5Y.a0A(316)][W5Y.a0A(272)](this),
                this[W5Y.R0A(921)]();
        },
        '\x70\x72\x6f\x63\x65\x73\x73': function (F3m) {
            return this[W5Y.R0A(145)](F3m),
                this[W5Y.R0A(1123)]();
        },
        '\x66\x69\x6e\x61\x6c\x69\x7a\x65': function (I3m) {
            return I3m && this[W5Y.R0A(145)](I3m),
                this[W5Y.a0A(12)]();
        },
        '\x6b\x65\x79\x53\x69\x7a\x65': 4,
        '\x69\x76\x53\x69\x7a\x65': 4,
        '\x65\x66': 1,
        '\x6a\x66': 2,
        '\x6b\x66': function () {
            return function (j3m) {
                return {
                    '\x65\x6e\x63\x72\x79\x70\x74': function (K1m, p1m, f3m) {
                        var d7A = 3;
                        var p1m = O7m[W5Y.R0A(156)](p1m);
                        f3m && f3m[W5Y.a0A(738)] || (f3m = f3m || {},
                            f3m[W5Y.R0A(738)] = O7m[W5Y.a0A(156)](W5Y.R0A(1169)));
                        for (var N1m = q7m[W5Y.R0A(583)](j3m, K1m, p1m, f3m), k1m = N1m[W5Y.a0A(850)][W5Y.a0A(474)], c1m = N1m[W5Y.R0A(850)][W5Y.a0A(1202)], r1m = [], M1m = 0; d7A * (d7A + 1) % 2 + 3 && M1m < c1m; M1m++) {
                            var P1m = k1m[M1m >>> 2] >>> 24 - M1m % 4 * 8 & 255;
                            r1m[W5Y.R0A(1400)](P1m);
                            d7A = d7A > 83630 ? d7A - 10 : d7A + 10;
                        }
                        return r1m;
                    }
                };
            }
                ;
        }()
    })
        , f7m = E7m[W5Y.R0A(240)] = {}
        , M3m = i7m[W5Y.a0A(523)] = W7m[W5Y.R0A(1462)]({
        '\x63\x72\x65\x61\x74\x65\x45\x6e\x63\x72\x79\x70\x74\x6f\x72': function (d1m, A1m) {
            return this[W5Y.R0A(55)][W5Y.R0A(1454)](d1m, A1m);
        },
        '\x69\x6e\x69\x74': function (n1m, G1m) {
            this[W5Y.R0A(303)] = n1m,
                this[W5Y.R0A(624)] = G1m;
        }
    })
        , p3m = f7m[W5Y.a0A(835)] = function () {
        var x1m = M3m[W5Y.R0A(1462)]();

        function w1m(H1m, e1m, L1m) {
            var P7A = 4;
            var W7A = 1;
            var F7A = 4;
            var m1m = this[W5Y.a0A(624)];
            if (W7A * (W7A + 1) % 2 + 6 && m1m) {
                var Z1m = m1m;
                this[W5Y.a0A(624)] = undefined;
            } else if (F7A * (F7A + 1) % 2 + 8)
                var Z1m = this[W5Y.R0A(61)];
            for (var Y1m = 0; Y1m < L1m && P7A * (P7A + 1) * P7A % 2 == 0; Y1m++) {
                H1m[e1m + Y1m] ^= Z1m[Y1m];
                P7A = P7A > 41530 ? P7A - 2 : P7A + 2;
            }
        }

        return x1m[W5Y.R0A(55)] = x1m[W5Y.R0A(1462)]({
            '\x70\x72\x6f\x63\x65\x73\x73\x42\x6c\x6f\x63\x6b': function (Q1m, a1m) {
                var h1m = this[W5Y.R0A(303)]
                    , C1m = h1m[W5Y.a0A(344)];
                w1m[W5Y.R0A(272)](this, Q1m, a1m, C1m),
                    h1m[W5Y.a0A(1187)](Q1m, a1m),
                    this[W5Y.R0A(61)] = Q1m[W5Y.a0A(382)](a1m, a1m + C1m);
            }
        }),
            x1m;
    }()
        , N3m = E7m[W5Y.R0A(423)] = {}
        , v7m = N3m[W5Y.R0A(218)] = {
        '\x70\x61\x64': function (s1m, E1m) {
            var y7A = 4;
            for (var b1m = 4 * E1m, R1m = b1m - s1m[W5Y.a0A(1202)] % b1m, i1m = R1m << 24 | R1m << 16 | R1m << 8 | R1m, l1m = [], B1m = 0; B1m < R1m && y7A * (y7A + 1) * y7A % 2 == 0; B1m += 4) {
                l1m[W5Y.a0A(1400)](i1m);
                y7A = y7A > 41844 ? y7A - 6 : y7A + 6;
            }
            var W1m = g7m[W5Y.a0A(1454)](l1m, R1m);
            s1m[W5Y.R0A(139)](W1m);
        }
    }
        , J7m = i7m[W5Y.R0A(654)] = D7m[W5Y.R0A(1462)]({
        '\x63\x66\x67': D7m[W5Y.a0A(1166)][W5Y.R0A(1462)]({
            '\x6d\x6f\x64\x65': p3m,
            '\x70\x61\x64\x64\x69\x6e\x67': v7m
        }),
        '\x72\x65\x73\x65\x74': function () {
            var J7A = 4;
            var i7A = 4;
            D7m[W5Y.R0A(316)][W5Y.R0A(272)](this);
            var D1m = this[W5Y.R0A(1166)]
                , g1m = D1m[W5Y.R0A(738)]
                , J1m = D1m[W5Y.a0A(240)];
            if (this[W5Y.R0A(1528)] == this[W5Y.R0A(543)] && i7A * (i7A + 1) % 2 + 8)
                var O1m = J1m[W5Y.R0A(812)];
            J7A * (J7A + 1) % 2 + 7 && (this[W5Y.R0A(1445)] && this[W5Y.R0A(1445)][W5Y.a0A(174)] == O1m) ? this[W5Y.R0A(1445)][W5Y.R0A(592)](this, g1m && g1m[W5Y.R0A(474)]) : (this[W5Y.a0A(1445)] = O1m[W5Y.R0A(272)](J1m, this, g1m && g1m[W5Y.R0A(474)]),
                this[W5Y.a0A(1445)][W5Y.R0A(174)] = O1m);
        },
        '\x64\x66': function (S1m, U1m) {
            this[W5Y.R0A(1445)][W5Y.R0A(259)](S1m, U1m);
        },
        '\x69\x66': function () {
            var T7A = 0;
            var o1m = this[W5Y.R0A(1166)][W5Y.a0A(1159)];
            if (T7A * (T7A + 1) * T7A % 2 == 0 && this[W5Y.R0A(1528)] == this[W5Y.R0A(543)]) {
                o1m[W5Y.R0A(423)](this[W5Y.a0A(273)], this[W5Y.a0A(344)]);
                var u1m = this[W5Y.a0A(1123)](!0);
            }
            return u1m;
        },
        '\x62\x6c\x6f\x63\x6b\x53\x69\x7a\x65': 4
    })
        , c3m = i7m[W5Y.a0A(42)] = W7m[W5Y.a0A(1462)]({
        '\x69\x6e\x69\x74': function (y1m) {
            this[W5Y.R0A(193)](y1m);
        }
    })
        , q7m = i7m[W5Y.a0A(584)] = W7m[W5Y.a0A(1462)]({
        '\x63\x66\x67': W7m[W5Y.R0A(1462)](),
        '\x65\x6e\x63\x72\x79\x70\x74': function (V1m, q1m, z1m, t1m) {
            t1m = this[W5Y.a0A(1166)][W5Y.a0A(1462)](t1m);
            var T1m = V1m[W5Y.a0A(812)](z1m, t1m)
                , v1m = T1m[W5Y.R0A(203)](q1m)
                , X1m = T1m[W5Y.R0A(1166)];
            return c3m[W5Y.a0A(1454)]({
                '\x63\x69\x70\x68\x65\x72\x74\x65\x78\x74': v1m,
                '\x6b\x65\x79': z1m,
                '\x69\x76': X1m[W5Y.a0A(738)],
                '\x61\x6c\x67\x6f\x72\x69\x74\x68\x6d': V1m,
                '\x6d\x6f\x64\x65': X1m[W5Y.R0A(240)],
                '\x70\x61\x64\x64\x69\x6e\x67': X1m[W5Y.a0A(1159)],
                '\x62\x6c\x6f\x63\x6b\x53\x69\x7a\x65': V1m[W5Y.R0A(344)],
                '\x66\x6f\x72\x6d\x61\x74\x74\x65\x72': t1m[W5Y.a0A(31)]
            });
        }
    })
        , s7m = []
        , I7m = []
        , u7m = []
        , y7m = []
        , t7m = []
        , X7m = []
        , V7m = []
        , T7m = []
        , z7m = []
        , U7m = [];
    !function () {
        var Y7A = 8;
        var v7A = 9;
        for (var f1m = [], M4m = 0; M4m < 256 && v7A * (v7A + 1) * v7A % 2 == 0; M4m++) {
            f1m[M4m] = M4m < 128 ? M4m << 1 : M4m << 1 ^ 283;
            v7A = v7A > 47983 ? v7A / 9 : v7A * 9;
        }
        for (var I1m = 0, p4m = 0, M4m = 0; Y7A * (Y7A + 1) * Y7A % 2 == 0 && M4m < 256; M4m++) {
            var j1m = p4m ^ p4m << 1 ^ p4m << 2 ^ p4m << 3 ^ p4m << 4;
            j1m = j1m >>> 8 ^ 255 & j1m ^ 99,
                s7m[I1m] = j1m,
                I7m[j1m] = I1m;
            var N4m = f1m[I1m]
                , r4m = f1m[N4m]
                , k4m = f1m[r4m]
                , F1m = 257 * f1m[j1m] ^ 16843008 * j1m;
            u7m[I1m] = F1m << 24 | F1m >>> 8,
                y7m[I1m] = F1m << 16 | F1m >>> 16,
                t7m[I1m] = F1m << 8 | F1m >>> 24,
                X7m[I1m] = F1m;
            var F1m = 16843009 * k4m ^ 65537 * r4m ^ 257 * N4m ^ 16843008 * I1m;
            V7m[j1m] = F1m << 24 | F1m >>> 8,
                T7m[j1m] = F1m << 16 | F1m >>> 16,
                z7m[j1m] = F1m << 8 | F1m >>> 24,
                U7m[j1m] = F1m,
                I1m ? (I1m = N4m ^ f1m[f1m[f1m[k4m ^ N4m]]],
                    p4m ^= f1m[f1m[p4m]]) : I1m = p4m = 1;
            Y7A = Y7A > 76845 ? Y7A - 2 : Y7A + 2;
        }
    }();
    var P3m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
        , k3m = F7m[W5Y.a0A(1544)] = J7m[W5Y.R0A(1462)]({
        '\x68\x66': function () {
            var a7A = 8;
            if ((!this[W5Y.a0A(514)] || this[W5Y.R0A(1147)] !== this[W5Y.R0A(1135)]) && a7A * (a7A + 1) % 2 + 1) {
                for (var G4m = this[W5Y.a0A(1147)] = this[W5Y.R0A(1135)], w4m = G4m[W5Y.R0A(474)], K4m = G4m[W5Y.R0A(1202)] / 4, x4m = this[W5Y.R0A(514)] = K4m + 6, n4m = 4 * (x4m + 1), A4m = this[W5Y.R0A(884)] = [], P4m = 0; P4m < n4m; P4m++)
                    if (P4m < K4m)
                        A4m[P4m] = w4m[P4m];
                    else {
                        var c4m = A4m[P4m - 1];
                        P4m % K4m ? K4m > 6 && P4m % K4m == 4 && (c4m = s7m[c4m >>> 24] << 24 | s7m[c4m >>> 16 & 255] << 16 | s7m[c4m >>> 8 & 255] << 8 | s7m[255 & c4m]) : (c4m = c4m << 8 | c4m >>> 24,
                            c4m = s7m[c4m >>> 24] << 24 | s7m[c4m >>> 16 & 255] << 16 | s7m[c4m >>> 8 & 255] << 8 | s7m[255 & c4m],
                            c4m ^= P3m[P4m / K4m | 0] << 24),
                            A4m[P4m] = A4m[P4m - K4m] ^ c4m;
                    }
                for (var Y4m = this[W5Y.a0A(161)] = [], d4m = 0; d4m < n4m; d4m++) {
                    var P4m = n4m - d4m;
                    if (d4m % 4)
                        var c4m = A4m[P4m];
                    else
                        var c4m = A4m[P4m - 4];
                    Y4m[d4m] = d4m < 4 || P4m <= 4 ? c4m : V7m[s7m[c4m >>> 24]] ^ T7m[s7m[c4m >>> 16 & 255]] ^ z7m[s7m[c4m >>> 8 & 255]] ^ U7m[s7m[255 & c4m]];
                }
            }
        },
        '\x65\x6e\x63\x72\x79\x70\x74\x42\x6c\x6f\x63\x6b': function (Z4m, m4m) {
            this[W5Y.a0A(633)](Z4m, m4m, this[W5Y.a0A(884)], u7m, y7m, t7m, X7m, s7m);
        },
        '\x76\x66': function (b4m, R4m, e4m, O4m, g4m, E4m, W4m, H4m) {
            var R7A = 7;
            for (var J4m = this[W5Y.R0A(514)], L4m = b4m[R4m] ^ e4m[0], Q4m = b4m[R4m + 1] ^ e4m[1], h4m = b4m[R4m + 2] ^ e4m[2], a4m = b4m[R4m + 3] ^ e4m[3], C4m = 4, D4m = 1; R7A * (R7A + 1) % 2 + 4 && D4m < J4m; D4m++) {
                var B4m = O4m[L4m >>> 24] ^ g4m[Q4m >>> 16 & 255] ^ E4m[h4m >>> 8 & 255] ^ W4m[255 & a4m] ^ e4m[C4m++]
                    , l4m = O4m[Q4m >>> 24] ^ g4m[h4m >>> 16 & 255] ^ E4m[a4m >>> 8 & 255] ^ W4m[255 & L4m] ^ e4m[C4m++]
                    , i4m = O4m[h4m >>> 24] ^ g4m[a4m >>> 16 & 255] ^ E4m[L4m >>> 8 & 255] ^ W4m[255 & Q4m] ^ e4m[C4m++]
                    ,
                    s4m = O4m[a4m >>> 24] ^ g4m[L4m >>> 16 & 255] ^ E4m[Q4m >>> 8 & 255] ^ W4m[255 & h4m] ^ e4m[C4m++];
                L4m = B4m,
                    Q4m = l4m,
                    h4m = i4m,
                    a4m = s4m;
                R7A = R7A >= 61237 ? R7A - 6 : R7A + 6;
            }
            var B4m = (H4m[L4m >>> 24] << 24 | H4m[Q4m >>> 16 & 255] << 16 | H4m[h4m >>> 8 & 255] << 8 | H4m[255 & a4m]) ^ e4m[C4m++]
                ,
                l4m = (H4m[Q4m >>> 24] << 24 | H4m[h4m >>> 16 & 255] << 16 | H4m[a4m >>> 8 & 255] << 8 | H4m[255 & L4m]) ^ e4m[C4m++]
                ,
                i4m = (H4m[h4m >>> 24] << 24 | H4m[a4m >>> 16 & 255] << 16 | H4m[L4m >>> 8 & 255] << 8 | H4m[255 & Q4m]) ^ e4m[C4m++]
                ,
                s4m = (H4m[a4m >>> 24] << 24 | H4m[L4m >>> 16 & 255] << 16 | H4m[Q4m >>> 8 & 255] << 8 | H4m[255 & h4m]) ^ e4m[C4m++];
            b4m[R4m] = B4m,
                b4m[R4m + 1] = l4m,
                b4m[R4m + 2] = i4m,
                b4m[R4m + 3] = s4m;
        },
        '\x6b\x65\x79\x53\x69\x7a\x65': 8
    });
    return E7m[W5Y.a0A(1544)] = J7m[W5Y.R0A(1033)](k3m),
        E7m[W5Y.a0A(1544)];
}();


// __init__时的w参数
function get_H4Z(gt, challenge) {
    var param = get_one();
    var Y4Z = slide.get_h8j(param);
    var aes_text = {
        "gt":gt,
        "challenge":challenge,
        "offline":false,
        "new_captcha":true,
        "product":"float","width":"300px",
        "protocol":"http://","click":"/static/js/click.2.7.6.js",
        "aspect_radio":{"click":128,"voice":128,"slide":103,"beeline":50,"pencil":128},
        "voice":"/static/js/voice.1.2.0.js",
        "slide":"/static/js/slide.7.5.5.js","type":"fullpage",
        "static_servers":["static.geetest.com/","dn-staticdown.qbox.me/"],
        "pencil":"/static/js/pencil.1.0.3.js","maze":"/static/js/maze.1.0.1.js",
        "geetest":"/static/js/geetest.6.0.9.js","beeline":"/static/js/beeline.1.0.1.js",
        "fullpage":"/static/js/fullpage.8.7.3.js",
        "cc":4,
        "ww":true,
        "i":"3513!!4527!!CSS1Compat!!1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!3!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!1!!-1!!-1!!-1!!0!!0!!0!!0!!432!!937!!1920!!1040!!zh-CN!!zh-CN,zh!!-1!!1!!24!!Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36!!1!!1!!1920!!1080!!1920!!1040!!1!!1!!1!!-1!!Win32!!0!!-8!!0fde89df151096923ca0bd00ac701897!!db4d466b9027521c836f3e7fe3af5d09!!internal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-plugin!!0!!-1!!0!!4!!Arial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings!!1560238359772!!-1,-1,1,0,0,0,0,4,2,9,13,14,23,1385,1386,1389,1390,1390,1390,-1!!-1!!-1!!5!!1!!-1!!-1!!5!!false!!false"
    };
    var m4Z = R6[W5Y.a0A(1362)](N5[W5Y.R0A(583)](JSON.stringify(aes_text), param));

    return [param, m4Z + Y4Z]
}



// 点击时候的w参数 可以默认为空，直接失败
function get_F4Z(gt, challenge, s, aes_key) {
    var V4Z = "M(*((1((M((";
    var v4Z = "M(*((1((M((";
    //var v4Z = "M.W8Pjp8Pj(A3(9b5n(((.B(b((e(bb(e(().-)K)O0M9O)*CniNkKDQL1).)ajKE51KES0Nj-1S)*0OE/1KE91KDRj/1S)*0RkK2I?I9l)Jj(k@(bn(nb(5bq,5((5e(,Y:M91?/)(N3)(E-(19/*M51)8)(QB*9n/)4)(?0)MY--b9BTb9B5/.:@2*-Y-)8)(Ab91d(NN(((8qqqq(1O/((/(FS(((/E/(((((KEFqTk2(MGSVWF2(MG-F91*A*(R(M23GV3UeT(Mdb55?0(MVYYbd_PYW5H950(M:b1*F91/Q*)b9.(b5*(((((((((("; // 这个可以随机，反正都是错误的参数
    var X4Z = "3513magic data4527magic dataCSS1Compatmagic data1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data2magic data3magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data1magic data-1magic data-1magic data-1magic data0magic data0magic data0magic data0magic data440magic data937magic data1920magic data1040magic datazh-CNmagic datazh-CN,zhmagic data-1magic data1magic data24magic dataMozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36magic data1magic data1magic data1920magic data1080magic data1920magic data1040magic data1magic data1magic data1magic data-1magic dataWin32magic data0magic data-8magic data0fde89df151096923ca0bd00ac701897magic datadb4d466b9027521c836f3e7fe3af5d09magic datainternal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-pluginmagic data0magic data-1magic data0magic data4magic dataArial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdingsmagic data1559463459418magic data-1,-1,1,0,0,0,0,4,1,3,7,7,19,89,90,98,102,102,102,-1magic data-1magic data-1magic data5magic data1magic data-1magic data-1magic data5magic datafalsemagic datafalse";
    var z4Z = "SPAN_0";

    var my_gt = gt;
    var my_challenge = challenge;
    var pass_time = 1400;
    var my_c = [12, 58, 98, 36, 43, 95, 62, 15, 12];
    var my_s = s;
    var my_datetime = (new Date()).getTime();

    var t4Z = {
        'captcha_token': "bboy",
        'ct': undefined,
        'ep': {
            "ts": my_datetime,
            "v": "8.7.3",
            "ip": "192.168.102.105",
            "f": m6(my_gt+ my_challenge),
            "de": false,
            "te": false,
            "me": true,
            "ven": "Google Inc.",
            "ren": "ANGLE (Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0)",
            "ac": [],
            "pu": false,
            "ph": false,
            "ni": false,
            "se": false,
            "fp": ["move", 414, 309, (new Date()).getTime(), "pointermove"],
            "lp": ["up", 215, 304, (new Date()).getTime(), "pointerup"],
            "em": {"ph": 0, "cp": 0, "ek": "11", "wd": 0, "nt": 0, "si": 0, "sc": 0},
            "tm": {
                "a": my_datetime,
                "b": (new Date()).getTime(),
                "c": (new Date()).getTime(),
                "d": 0,
                "e": 0,
                "f": (new Date()).getTime(),
                "g": (new Date()).getTime(),
                "h": (new Date()).getTime(),
                "i": (new Date()).getTime(),
                "j": (new Date()).getTime(),
                "k": 0,
                "l": (new Date()).getTime(),
                "m": (new Date()).getTime(),
                "n": (new Date()).getTime(),
                "o": (new Date()).getTime(),
                "p": (new Date()).getTime(),
                "q": (new Date()).getTime(),
                "r": (new Date()).getTime(),
                "s": (new Date()).getTime(),
                "t": (new Date()).getTime(),
                "u": (new Date()).getTime()
            },
            "by": 0
        },
        "lang": "zh-cn",
        "type": "fullpage",
        "tt": get_tt(v4Z, my_c, my_s),
        'light': z4Z,
        's': m6(R6[W5Y.a0A(1310)](V4Z)),
        'h': m6(R6[W5Y.a0A(1310)](X4Z)),
        'hh': m6(X4Z),
        'hi': m6("3513!!4527!!CSS1Compat!!1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!3!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!1!!-1!!-1!!-1!!0!!0!!0!!0!!440!!937!!1920!!1040!!zh-CN!!zh-CN,zh!!-1!!1!!24!!Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36!!1!!1!!1920!!1080!!1920!!1040!!1!!1!!1!!-1!!Win32!!0!!-8!!0fde89df151096923ca0bd00ac701897!!db4d466b9027521c836f3e7fe3af5d09!!internal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-plugin!!0!!-1!!0!!4!!Arial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings!!1559463459418!!-1,-1,1,0,0,0,0,4,1,3,7,7,19,89,90,98,102,102,102,-1!!-1!!-1!!5!!1!!-1!!-1!!5!!false!!false"),
        'vip_order': undefined,
        "passtime": pass_time,
        'rp': m6(my_gt + my_challenge + pass_time)
    };

    var q4Z = N5[W5Y.R0A(583)](JSON.stringify(t4Z), aes_key);
    var F4Z = R6[W5Y.a0A(1362)](q4Z);
    return F4Z
}


function w1(gt, challenge) {
    return get_H4Z(gt, challenge)
}

function w2(gt, challenge, s, aes_key) {
    return  get_F4Z(gt, challenge, s, aes_key)
}

function w3(gt,challenge, s, distance){
    var travel = genMoves.genMoves(distance);
    return slide.get_w(gt, challenge, s, travel);
}
